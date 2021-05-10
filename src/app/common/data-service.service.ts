import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

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
  }

  getNewUserInfo() {
    return this.newUser.asObservable();
  }
}
