import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'stu-login-component',
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
 
   @ViewChild('passwordElement') passwordEle!: ElementRef<HTMLInputElement>;
   @ViewChild('messageEle') messageEle!: ElementRef<HTMLDivElement>;
    message: string = '';
   private router;
   constructor(router: Router)
   {
     this.router = router;
   }

  Submit(ele : HTMLInputElement)
  {
     debugger;
    const userStr=ele.value;
    const password=this.passwordEle.nativeElement.value;

    if(userStr==='moin' || password==='khan'){
      this.router.navigateByUrl('/dashboard');
    }
    else{
     this.message="UserName/password is not correct";
    }
  }

   changeText(){
    this.message='';
  }
}
