import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { DataServiceService } from '../common/data-service.service'; 
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  updateUserInfo: any;
  tagValue: string = '';
  imagePath: any;
  constructor(private cd: ChangeDetectorRef, private dataService: DataServiceService, private _sanitizer: DomSanitizer, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataService.getNewUserInfo().subscribe(info => {
      this.updateUserInfo = info;
      if(this.updateUserInfo.tags.length > 0) {
        this.tagValue = '';
        this.updateUserInfo.tags.forEach(element => {
          if(this.tagValue === ''){
            this.tagValue = element.name;
          } else {
            this.tagValue = this.tagValue+","+element.name;
          }
        });
      }
      this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(this.updateUserInfo.file);
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserRegistrationComponent,{
      width: '800px',disableClose: true,maxHeight: '100vh'
    });
  }

  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imagePath = reader.result;
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();
    }
  }

}
