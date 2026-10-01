import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'stu-quick-popup',
  styleUrl: './quick-popup.css',
  templateUrl: './quick-popup.html',
})
export class QuickPopup {

  @Output() closeEvent= new EventEmitter<any>();

  @Input() message : any;


  close(){
  this.closeEvent.emit();
}

}
