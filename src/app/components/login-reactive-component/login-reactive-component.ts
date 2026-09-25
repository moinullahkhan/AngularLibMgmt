import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'stu-login-reactive-component',
  styleUrl: './login-reactive-component.css',
  templateUrl: './login-reactive-component.html',
})
export class LoginReactiveComponent {

 user = {
       userid:'',
       password: ''
      }

       userForm! : FormGroup;

       constructor(private router: Router){
            this.userForm=new FormGroup(
           {
          userid: new FormControl('',[Validators.required, Validators.minLength(4)]),
          password: new FormControl('',[Validators.required, Validators.minLength(4)])
          }
        )
      }
  
   message: string=''; 
  changeText(){
    this.message='';
  }
  showMessage: boolean = false;
  Submit(userForm : FormGroup)
  {
    debugger;
     if(userForm.invalid)
     {
       this.showMessage = true;
       return;
     }
     
  }

  addValidation(userForm: FormGroup){
    debugger;
    const passEle=userForm.controls!['password'];
    passEle.clearValidators();
    passEle.addValidators([Validators.required, Validators.minLength(4)])
    passEle.markAllAsDirty();
    this.showMessage=false;
  } 
  
  removeValidation(userForm: FormGroup){
    debugger;
    const passEle = userForm.controls!['password'];
    passEle.clearValidators();
    passEle.markAsPristine();
    this.showMessage = false;
  }
}
