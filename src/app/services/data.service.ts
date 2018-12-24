import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'Bob',
        lastName: 'Smith',
        email: 'bob@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true,
      },
      {
        firstName: 'David',
        lastName: 'Jones',
        email: 'david@gmail.com',
        isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide: true,
      },
      {
        firstName: 'Matt',
        lastName: 'Johnson',
        email: 'matt@gmail.com',
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true,
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
    
      setTimeout(()=> {
        observer.next(1);
      },1000);

      setTimeout(()=> {
        observer.next(2);
      },2000);

      setTimeout(()=> {
        observer.next(3);
      },3000);

      setTimeout(()=> {
        observer.next(4);
      },4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    console.log('getting users from service');
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }


}
