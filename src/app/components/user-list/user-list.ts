import { Component, OnInit } from '@angular/core';
import { Utility } from '../../utilities/utility';
import { HttpApiHandler } from '../../commonlib/http-api-handler';
import { UserService } from '../../services/user-service';
import { StudentService } from '../../services/student-service';

@Component({
  imports: [],
  selector: 'stu-user-list',
  styleUrl: './user-list.css',
  templateUrl: './user-list.html',
 // providers: [UserService]
  viewProviders: [StudentService, UserService]
})
export class UserList implements OnInit {
   userService!: UserService; //= new UserService(); //compostion 
   studentService!: StudentService; // = new StudentService();

   constructor(userService: UserService, studentService: StudentService)
   {
        this.userService = userService;
        this.studentService = studentService;
        debugger;
   }
   
   users: Array<any> = [];
  ngOnInit(): void {
     this.users = this.userService.getUsers();
  }

   direction = -1;
   sortData(columnName: string)
   {
     this.direction = this.direction * -1;
     Utility.sortData(this.users, columnName,this.direction);
   }

 

   columnList = [
    {displayName: 'User ID', columnName: 'id'},
    {displayName: 'User Name', columnName: 'firstName'},
    {displayName: 'User Age', columnName: 'age'}
  ]

}
