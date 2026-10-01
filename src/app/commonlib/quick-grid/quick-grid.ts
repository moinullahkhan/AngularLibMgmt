import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Utility } from '../../utilities/utility';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'stu-quick-grid',
  styleUrl: './quick-grid.css',
  templateUrl: './quick-grid.html',
})
export class QuickGrid {

 @Input() columnList: any;

 @Input() data: Array<any>=[]

 @Input() actionColumnList: any;

 @Output() actionCLickEvent=new EventEmitter<any>();

 constructor(private router: Router){

  }

  actionEve(citem: any,item: any)
  {
   // this.router.navigateByUrl('/student/view');
   this.actionCLickEvent.emit({action: citem, row: item})
  }
  direction = -1;
   sortData(columnName: string)
   {
     this.direction = this.direction * -1;
     Utility.sortData(this.data, columnName,this.direction);
   }
}
