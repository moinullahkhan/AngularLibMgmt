import { Component, OnInit } from '@angular/core';
import { Utility } from '../../utilities/utility';
import { UserService } from '../../services/user-service';
import { StudentService } from '../../services/student-service';
import { HttpApiHandler } from '../../commonlib/http-api-handler';

@Component({
  imports: [],
  selector: 'stu-student-list-component',
  styleUrl: './student-list-component.css',
  templateUrl: './student-list-component.html',
})
export class StudentListComponent implements OnInit{
     users: Array<any> = [];
     ngOnInit(): void {
      this.users = this.studentService.getStudents();
    }
    
     constructor(private studentService: StudentService){

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
    {displayName: 'Subject', columnName: 'subject'}
  ]

}
