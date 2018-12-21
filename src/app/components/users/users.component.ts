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
  enableAdd: boolean = true;
  showExtended: boolean = true;
  currentClasses = {};
  currentStyles = {};

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
          image: 'http://lorempixel.com/600/600/people/3',
          isActive: true,
          balance: 100,
          registered: new Date('01/02/2018 08:30:00'),
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
          image: 'http://lorempixel.com/600/600/people/2',
          isActive: false,
          balance: 200,
          registered: new Date('03/11/2017 06:20:00'),
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
          image: 'http://lorempixel.com/600/600/people/1',
          isActive: true,
          balance: 50,
          registered: new Date('11/02/2016 10:30:00'),
        }
      ];

      this.loaded = true;
    }, 2000);
    
      this.setCurrentClasses();
      this.setCurrentStyles();

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

  logThis(e) {
    console.log('logThis event: ', e);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended,
    }
  }

  setCurrentStyles = () => {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
    }
  }

}
