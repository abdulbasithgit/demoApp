import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { DataServiceService } from '../common/data-service.service';
import { Router } from '@angular/router';
import { MatChipInputEvent } from '@angular/material/chips';
export interface Tag {
  name: string;
}
export interface State {
  value: string;
  viewValue: string;
}
export interface Country {
  name: string,
    code: string
}
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  public breakpoint: number;
  public addUserForm: FormGroup;
  wasFormChanged: boolean = false;
  imageUrl: any = "https://previews.123rf.com/images/mialima/mialima1603/mialima160300025/55096766-male-user-icon-isolated-on-a-white-background-account-avatar-for-web-user-profile-picture-unknown-ma.jpg";
  editFile: boolean = true;
  removeUpload: boolean = false;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  Tags: any = [];
  ageValue: number = 20;
  allcountry: any = [];
  allstate: State[] = [];
  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef, public dialog: MatDialog, private dataService: DataServiceService, public route: Router) {}

  ngOnInit(): void {
    this.dataService.getJsonValue("Allcountry").subscribe((value: any) => {
      this.allcountry = value.country;
    });
    this.dataService.getJsonValue("AllState").subscribe((value: any) => {
      this.allstate = value.state;
    });
    this.addUserForm = this.fb.group({
      file: [null],
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', []],
      age: [this.ageValue, []],
      state: ['', []],
      country: ['', []],
      address: ['', []],
      tags: [this.Tags, []],
    });
    this.breakpoint = window.innerWidth <= 600 ? 1 : 2;
  }

  formatLabel(value: number) {
    this.ageValue = value;
    return value;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.Tags.push({
        name: value.trim()
      });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(Tag: Tag): void {
    const index = this.Tags.indexOf(Tag);

    if (index >= 0) {
      this.Tags.splice(index, 1);
    }
  }

  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.addUserForm.patchValue({
          file: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();
    }
  }

  formChanged(): void {
    this.wasFormChanged = true;
    this.dataService.setNewUserInfo(this.addUserForm.value);
    this.dialog.closeAll();
    this.route.navigate(['/UserProfile']);
  }

  public onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }

  openDialog(): void {
    console.log(this.wasFormChanged);
    /* if (this.addUserForm.dirty) {
      const dialogRef = this.dialog.open(UserProfileComponent, {
        width: '340px',
      });
    } else { */
    this.dialog.closeAll();
    //}
  }

}
