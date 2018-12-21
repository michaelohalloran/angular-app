import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }
  };
  users: User[];
  loaded: boolean = false;
  enableAdd: boolean = false;
  showExtended: boolean = true;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {

    setTimeout(()=> {
      this.users = [
        {
          firstName: 'Bob',
          lastName: 'Smith',
          age: 26,
          address: {
            street: '123 Main St.',
            city: 'Reno',
            state: 'NV'
          },
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true,
        },
        {
          firstName: 'David',
          lastName: 'Jones',
          age: 29,
          address: {
            street: '456 Jackson St.',
            city: 'Missoula',
            state: 'MT'
          },
          isActive: false,
          registered: new Date('03/11/2017 06:20:00'),
          hide: true,
        },
        {
          firstName: 'Matt',
          lastName: 'Johnson',
          age: 35,
          address: {
            street: '789 Maple St.',
            city: 'Honolulu',
            state: 'HI'
          },
          isActive: true,
          registered: new Date('11/02/2016 10:30:00'),
          hide: true,
        }
      ];

      this.loaded = true;
    }, 2000);
    
    // this.addUser({
    //   firstName: 'Daniel',
    //     lastName: 'Ryan',
    //     age: 23,
    //     address: {
    //       street: '645 Pearl St.',
    //       city: 'Naples',
    //       state: 'FL'
    //     },
    // })
  }


  addUser() {
    console.log('this.user: ', this.user);
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: ''
      }
    }
  }

  fireEvent(e) {
    console.log('event ', e);
  }

  toggleHide(user:User) {
    user.hide = !user.hide;
  }

  onSubmit(e) {
    e.preventDefault();
  }

}
