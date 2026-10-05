import { Component } from '@angular/core';
import { GenderNamePipePipe } from '../../commonlib/Pipes/gender-name-pipe';
import { FullNamePipePipe } from '../../commonlib/Pipes/full-name-pipe';
import { KeyValuePipe } from '../../commonlib/Pipes/key-value-pipe';

@Component({
  imports: [GenderNamePipePipe, FullNamePipePipe, KeyValuePipe],
  selector: 'stu-teacher-component',
  styleUrl: './teacher-component.css',
  templateUrl: './teacher-component.html',
})
export class TeacherComponent {

  subjects=[
    {
      id: 1,
      Name: 'Angular'
    },
     {
      id: 2,
      Name: 'React'
    },
     {
      id: 3,
      Name: '.Net'
    },
     {
      id: 4,
      Name: 'Java'
    },
     {
      id: 5,
      Name: 'Selenium'
    },
  ]

teacherList=[
      {
        id: 1,
        firstName: 'Manish',
        lastName: 'joshi',
        gender: 'M',
        dob: '12-12-1991',
        subjects: [1,3,5],
        isActive: true

      },
      {
        id: 2,
        firstName: 'Manoj',
        lastName: 'sharma',
        gender: 'M',
        dob: '12-12-1993',
        subjects: [1,3,5],
        isActive: false

      },
      {
        id: 3,
        firstName: 'Ajay',
        lastName: 'Velankar',
        gender: 'M',
        dob: '12-12-1994',
        subjects: [1,3,2],
        isActive: true

      },
      {
        id: 4,
        firstName: 'Amruta',
        lastName: 'Velankar',
        gender: 'F',
        dob: '12-12-1992',
        subjects: [1,2],
        isActive: true

      },{
        id: 5,
        firstName: 'Smita',
        lastName: 'Sharma',
        gender: 'F',
        dob: '12-12-1994',
        subjects: [4],
        isActive: true

      }
  ]

  change1()
  {
     this.subjects[0].Name = 'Angular 22'
     this.teacherList[0].lastName = 'a'
     console.log(this.subjects);
  }

  change2()
  {
     this.subjects[0].Name = 'Angular 23'
     this.teacherList[0].lastName = 'b'
     this.subjects=[...this.subjects]
     console.log(this.subjects);
  }
}
