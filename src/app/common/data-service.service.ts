import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private url: string = "http://localhost:3000/";
  constructor(private httpclient: HttpClient) { }

  private newUser = new BehaviorSubject<any>({
    file: '',
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    age: '',
    state: '',
    country: '',
    address: '',
    tags: ''
  });

  setNewUserInfo(user: any) {
    this.newUser.next(user);
    this.addMember(user);
  }

  getNewUserInfo() {
    return this.newUser.asObservable();
  }

  getJsonValue(value: string) {
    return this.httpclient.get(this.url+value);
  }

  addMember(memberForm: any) {
    this.httpclient.post(`${this.url}AddMembers`, memberForm).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  }
}
