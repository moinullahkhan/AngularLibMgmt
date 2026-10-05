import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChildren, DoCheck, Input, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { QuickAccordianDirective } from './quick-accordian-directive';
import { NgTemplateOutlet } from '@angular/common';


@Component({
  imports: [NgTemplateOutlet],
  selector: 'stu-quick-accordian',
  styleUrl: './quick-accordian.css',
  templateUrl: './quick-accordian.html',
})
export class QuickAccordian implements OnDestroy, OnInit, AfterContentInit, AfterViewInit, DoCheck, AfterViewChecked, AfterContentChecked , OnChanges {
 
  
  @Input() OneAtATime: boolean = false;
  @ContentChildren(QuickAccordianDirective) accordianList!: QueryList<QuickAccordianDirective>;
  
  constructor(){
   console.log("constructor")
   }
   
  ngOnDestroy(): void {
  console.log("ngOnDestroy")
  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    console.log("ngOnChanges")
  }
  
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngOnInit(): void {
    console.log("ngOnInit");
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

  show(item: QuickAccordianDirective)
  {
    if(this.OneAtATime)
    {
       this.accordianList.forEach(element => {
            if(element==item)
            {
              item.isShow = true;
            } else{
              if(element.isAlwaysShow)
              {
                element.isShow = true;
              }
              else
              {
                element.isShow = false;
              }
            }
       });
    }
    else{
        item.isShow=!item.isShow;
    }
  }
}
