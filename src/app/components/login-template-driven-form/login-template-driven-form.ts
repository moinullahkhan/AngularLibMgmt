import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'stu-login-template-driven-form',
  styleUrl: './login-template-driven-form.css',
  templateUrl: './login-template-driven-form.html',
})
export class LoginTemplateDrivenForm {


      user = {
       userid:'',
       password: ''
      }

       constructor(private router: Router){
 
           }
  
   message: string=''; 
  changeText(){
    this.message='';
  }
  showMessage: boolean = false;
  Submit(userForm : NgForm)
  {
     if(userForm.invalid)
     {
       this.showMessage = true;
       return;
     }
     
  }

  addValidation(userForm: NgForm){
    debugger;
    const passEle=userForm.controls!['password'];
    passEle.clearValidators();
    passEle.addValidators([Validators.required, Validators.minLength(4)])
    passEle.markAllAsDirty();
    this.showMessage=false;
  } 
  
  removeValidation(userForm: NgForm){
    debugger;
    const passEle = userForm.controls!['password'];
    passEle.clearValidators();
    passEle.markAsPristine();
    this.showMessage = false;
  }

 
}
