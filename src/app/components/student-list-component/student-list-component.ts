import { Component, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { Utility } from '../../utilities/utility';
import { UserService } from '../../services/user-service';
import { StudentService } from '../../services/student-service';
import { HttpApiHandler } from '../../commonlib/http-api-handler';
import { StudentDto } from '../../models/Students';
import { QuickGrid } from '../../commonlib/quick-grid/quick-grid';
import { Router } from '@angular/router';
import { QuickPopup } from '../../commonlib/quick-popup/quick-popup';
import { StudentEdit } from '../student-edit/student-edit';

@Component({
  imports: [QuickGrid, QuickPopup, StudentEdit],
  selector: 'stu-student-list-component',
  styleUrl: './student-list-component.css',
  templateUrl: './student-list-component.html',
})

export class StudentListComponent implements OnInit{
    users: WritableSignal<Array<StudentDto>> = signal([]);
     ngOnInit(): void {
     this.studentService.getStudents().subscribe((res: Array<StudentDto>) => {
       this.users.set(res);
     })
    }
   
     constructor(private studentService: StudentService,private router: Router){

  }
    isShowEditPopup = false;
    isShowDeletePopup = false;
    message = "Do you really want to delete?"

   close()
   {
     this.isShowEditPopup = false;
   }

   closeDelete(){
    this.isShowDeletePopup = false;
  }

  eve(eventObj: any)
  {
    if(eventObj.action.type == "view")
    {
      this.router.navigateByUrl('/student/view');
    }
    
    if(eventObj.action.type == "edit")
    {
      this.isShowEditPopup = true;
    }

    if(eventObj.action.type == "delete")
    {
      this.isShowDeletePopup = true;
    }
  }

   columnList = [
    {displayName: 'User ID', columnName: 'id'},
    {displayName: 'User Name', columnName: 'firstName'},
    {displayName: 'Subject', columnName: 'subject'}
  ]

   actionColumnList=[
    {type: 'view', isShow: true},
    {type: 'edit', isShow: true},
    {type: 'delete', isShow: true},
  ]
}
