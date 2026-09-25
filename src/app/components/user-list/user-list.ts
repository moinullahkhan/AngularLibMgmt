import { Component, OnInit } from '@angular/core';
import { Utility } from '../../utilities/utility';

@Component({
  imports: [],
  selector: 'stu-user-list',
  styleUrl: './user-list.css',
  templateUrl: './user-list.html',
})
export class UserList implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
   direction = -1;
   sortData(columnName: string)
   {
     this.direction = this.direction * -1;
     Utility.sortData(this.users, columnName,this.direction);
   }

  users=[
    {
      id: 1001,
      firstName : 'Ashwini',
      lastName : 'kokane',
      gender: 'F',
      age: 32
    },
    {
      id: 1003,
      firstName : 'Manish',
      lastName : 'Verma',
      gender: 'M',
      age: 30
    },
     {
      id: 1002,
      firstName : 'Sumit',
      lastName : 'Joshi',
      gender: 'M',
      age: 42
    },
    {
      id: 1004,
      firstName : 'Varsha',
      lastName : 'changude',
      gender: 'F',
      age: 21
    },
    {
      id: 1005,
      firstName : 'Moin',
      lastName : 'Khan',
      gender: 'M',
      age: 45
    },
  ]

   columnList = [
    {displayName: 'User ID', columnName: 'id'},
    {displayName: 'User Name', columnName: 'firstName'},
    {displayName: 'User Age', columnName: 'age'}
  ]

}
