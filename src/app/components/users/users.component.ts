import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  loaded: boolean = false;

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


  addUser(user) {
    this.users.push(user);
  }

}
