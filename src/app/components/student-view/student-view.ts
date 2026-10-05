import { Component } from '@angular/core';
import { QuickAccordian } from '../../commonlib/quick-accordian/quick-accordian';
import { QuickAccordianDirective } from '../../commonlib/quick-accordian/quick-accordian-directive';

@Component({
  imports: [QuickAccordian, QuickAccordianDirective],
  selector: 'stu-student-view',
  styleUrl: './student-view.css',
  templateUrl: './student-view.html',
})
export class StudentView {
  isOneAtAtime = true
  changeoneAtAtaTime()
  {
     this.isOneAtAtime=!this.isOneAtAtime;
  }
}
