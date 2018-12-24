import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { DataService } from '../../services/data.service';

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
  data: any;

  constructor(private dataService: DataService ) { }

  ngOnInit() {

    this.dataService.getData().subscribe(data => {
      console.log('data: ', data);
    });

      this.dataService.getUsers().subscribe(users => {
        this.users = users;
        this.loaded = true;
      });

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
      this.dataService.addUser(value);
      this.form.reset();
    }
  }

}
