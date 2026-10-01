import { Component, signal } from '@angular/core';
import { Calculator } from '../../services/calculator';
import { BehaviorSubject, filter, interval, map, of, ReplaySubject, skip, Subscription, take } from 'rxjs';

@Component({
  imports: [],
  selector: 'stu-maths',
  styleUrl: './maths.css',
  templateUrl: './maths.html',
})
export class Maths {


  constructor(private calculator: Calculator)
  {
    this.unsubscribe = this.calculator.subject$.subscribe((res: any)=>{
        this.timeShowObs.set(res);
    })
  }

  timeShowPromise = signal<any>('');
  timeShowCallBack = signal<any>('');
  timeShowObs = signal<any>('');
  unsubscribe?: Subscription | null;

  showValues$ = new ReplaySubject<any>(5);
  showNumber = signal(0);

       behaviourSubjectSub(){
         this.showValues$.subscribe({
          next: (res)=>{
            console.log(res);
            this.showNumber.set(res);
          }
         })
       }
         
       currentValue = 0;
       behaviourSubjectSubNext(){
        this.currentValue++;
        this.showValues$.next(this.currentValue);
       }

      showInterval(){
          interval(1000).subscribe((n) =>
          {
            console.log(`I am in RxJs interval method ${n}`)
          })

           this.calculator.intervalMy(1000).subscribe((n)=>{
           console.log(`I am in Calculator interval method ${n}`)
           })
      }

      showTimeCallObs(){
         this.calculator.showTimeWithObs();
  }

  showOf()
  {
    // of(1,2,3,6,8,9,12,4,7,2,11,34,45).
    // pipe(filter((x: number)=>x%2==0), map((x: number)=>x+1), skip(3), take(2)).
    // subscribe((res)=>{
    //   console.log(`I am in RxJs of method ${res}`);
    // });

    this.calculator.ofMy(1,2,3,6,8,9,30,4,7,2,11,34,45).
   // pipe(filter((x: number)=>x%2==0)).
   subscribe({
      next:  (res: any)=>{
      console.log(`I am in My of  of method ${res}`);
    },
    error: (err)=>{
      console.log("I am in error part");
    },
    complete: ()=>{
       console.log("I am in complete block");
    }
    });
  }
  
  stopTimeCallObs()
  {
    if(this.unsubscribe){
    this.unsubscribe.unsubscribe();
    this.unsubscribe=null;
  }
  }

  showTime()
  {
    this.calculator.showTimeWithPromise().then((res: any)=>{
                         this.timeShowPromise.set(res);
    })
  }

  showTimeCallBack(){
     this.calculator.showTimeWithCallBack((res: any)=>{
        this.timeShowCallBack.set(res);
    })
  }

  result: any = '';
  message: any='';
  
  async calc(a: any, b: any)
  {
    let result = await this.calculator.divWithPromise(a, b);
    this.message = '';
    this.result = result;
  }
  catch(err: any)
  {
    this.message = err;
    this.result = '';
  }
}

