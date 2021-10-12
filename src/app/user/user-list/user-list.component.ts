import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [
    {
      id: 1,
      name: 'Barry',
      surname: 'White'
    },
    {
      id: 2,
      name: 'John',
      surname: 'Lennon'
    },
    {
      id: 3,
      name: 'Freddy',
      surname: 'Mercury'
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
