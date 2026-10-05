import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  imports: [],
  selector: 'stu-quick-popup',
  styleUrl: './quick-popup.css',
  templateUrl: './quick-popup.html',
})
export class QuickPopup implements OnInit{
 ngOnInit(): void {

    if(!this.isShowFooter==undefined)
    {
        this.isShowFooter = true;
    }
    console.log("ngOnInit");
  }
    
constructor(){
   console.log("constructor")
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges")
  }
  
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
    ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngDoCheck(): void {
   console.log("ngDoCheck")
  }
  ngAfterViewChecked(): void {
     console.log("ngAfterViewChecked")
  }
  ngAfterContentChecked(): void {
     console.log("ngAfterContentChecked")
  }

  @Output() closeEvent= new EventEmitter<any>();

  @Input() message : any;

  @Input() isShowFooter? : boolean;


  close(){
  this.closeEvent.emit();
}

}
