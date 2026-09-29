import { Service } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Service()
export class Calculator {

    ofMy(...args: any)
    {
        
       // let args = arguments;
          debugger;
         return new Observable((obs: Observer<any>)=>{
                for (let index = 0; index < args.length; index++) {
                        const element = args[index];
                        obs.next(element);
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

     showTimeWithObs(){
        return new Observable((obj: Observer<any>)=>{
                setInterval(()=>{
                        obj.next(new Date());
                },2000)

        });
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
