import { Component, OnInit, ViewChild } from '@angular/core';
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
    email: '',
  };
  users: User[];
  loaded: boolean = false;
  enableAdd: boolean = false;
  showExtended: boolean = true;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor() { }

  ngOnInit() {

    setTimeout(()=> {
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

      this.loaded = true;
    }, 2000);
  }

  toggleHide(user:User) {
    user.hide = !user.hide;
  }

  onSubmit({value, valid}: {value:User, valid:boolean}) {

    if(!valid) {
      console.log('Form not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);
      this.form.reset();
    }
  }

}
