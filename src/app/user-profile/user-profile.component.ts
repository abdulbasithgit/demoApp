import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../common/data-service.service'; 
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  updateUserInfo: any;
  tagValue: string = '';
  imagePath: any;
  constructor(private dataService: DataServiceService, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.dataService.getNewUserInfo().subscribe(info => {
      this.updateUserInfo = info;
      if(this.updateUserInfo.tags.length > 0) {
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

}
