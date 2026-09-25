import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const authChildGuard: CanActivateChildFn = (childRoute, state) => {
  debugger;
  const router = inject(Router);

   const userString=localStorage.getItem("User");

 if(userString){
  return  true;
 }
 
  router.navigateByUrl('/login');
  return false;
};
