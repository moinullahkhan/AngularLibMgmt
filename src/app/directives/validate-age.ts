import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[stuValidateAge]',
})
export class ValidateAge implements OnInit {

    ngOnInit(): void {
       this.validate(this.eleme.nativeElement);
    }

    constructor(private eleme: ElementRef<HTMLInputElement>){
     //  this.validate(eleme.nativeElement);
  }
 

    validate(ele: HTMLInputElement){
      const num=+ ele.value; 

    ele.classList.remove('red');
    ele.classList.remove('yellow');
    ele.classList.remove('green')

    if(num < 18){
      ele.classList.add('red')
    }
    else if(num> 50){
      ele.classList.add('yellow')
    } 
    else {
      ele.classList.add('green')
    }
  }

  @HostListener('blur',['$event'])
  blur(eve: any)
  {
    const ele = eve.target;
    this.validate(ele);
  }
}
