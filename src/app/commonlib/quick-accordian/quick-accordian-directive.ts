import { Directive, Input, OnInit, TemplateRef } from '@angular/core';

@Directive({
  selector: '[stuQuickAccordianDirective]',
})
export class QuickAccordianDirective implements OnInit  {

 @Input() header: string='';

 @Input() isShow : boolean=false;

 @Input() isAlwaysShow: boolean = false;
 
  constructor(public temp: TemplateRef<QuickAccordianDirective>){
 
    
  }
  ngOnInit(): void {
    if(this.isAlwaysShow)
      this.isShow = true;
  }
}
