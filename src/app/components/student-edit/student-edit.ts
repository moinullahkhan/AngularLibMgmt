import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit, signal } from '@angular/core';
import { form, FormField, minLength, required } from '@angular/forms/signals';
import { StudentDto } from '../../models/Students';

@Component({
  imports: [JsonPipe, FormField],
  selector: 'stu-student-edit',
  styleUrl: './student-edit.css',
  templateUrl: './student-edit.html',
})
export class StudentEdit implements OnInit {
 

  name = "test";

  @Input() data: any;

  studentData: any = signal<StudentDto>(new StudentDto());

  studentDataForm : any = form(this.studentData, (student: any) => {
         required(student.firstName);
         minLength(student.firstName, 2);
    });
  
 
    isException()
    {
       const value = this.studentDataForm.firstName();
       const isError = value?.errors()?.findIndex((x: any)=>x.kind=='required') > -1
       return isError;
    }

    show()
    {
     

    }

   ngOnInit(): void {
    this.studentData.set(this.data);
  }
}
