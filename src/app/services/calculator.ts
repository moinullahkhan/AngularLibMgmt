import { Service } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Service()
export class Calculator {

    ofMy(...args: any)
    {

         return new Observable((obs: Observer<any>)=>{
                for (let index = 0; index < args.length; index++) {
                        const element = args[index];
                        if(element == 13)
                        {
                            obs.error(element);
                        }
                        else if(element==30){
                              obs.next(element);
                              obs.complete();   
                        }
                        else {
                             obs.next(element);
                        }
                }
        })
    }
    
    intervalMy(interval: number){
                let i=0;
                return new Observable((obs: Observer<number>)=>{
                        setInterval(()=>{
                                obs.next(i++);
                        },interval)         
                });
        }

    //   public subject$= new Subject<any>(); 
         public subject$= new BehaviorSubject<any>(new Date());
         
     showTimeWithObs(){
           setInterval(()=>{
                    this.subject$.next(new Date());
            },1000)
    }
        
     showTimeWithCallBack(succ: any){
                 setInterval(()=>{
                        succ(new Date());
                },2000)
        }
        
     showTimeWithPromise()
     {
        return new Promise((succ) => {
            setInterval(()=>{
                        succ(new Date());
                },2000)
        })
     }

    divWithPromise(a:any, b: any)
    {
        return new Promise((succ, fail) => {
       if(isNaN(a))
        {
            fail("a is not a number");
            return;
        }
        if(isNaN(b))
        {
            fail("b is not a number");
            return;
        }
        if(b == 0)
        {
            fail(" b should not be zero");
            return;
        }
        succ(+a/+b);
        })
    }

    div(a:any, b: any, succ: any, fail: any)
    {
       if(isNaN(a))
        {
            fail("a is not a number");
            return;
        }
        if(isNaN(b))
        {
            fail("b is not a number");
            return;
        }
        succ(+a/+b);
    }
}
