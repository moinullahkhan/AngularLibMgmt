import { Component, signal } from '@angular/core';
import { Calculator } from '../../services/calculator';
import { filter, interval, map, of, skip, take } from 'rxjs';

@Component({
  imports: [],
  selector: 'stu-maths',
  styleUrl: './maths.css',
  templateUrl: './maths.html',
})
export class Maths {


  constructor(private calculator: Calculator)
  {
    
  }
  timeShowPromise = signal<any>('');
  timeShowCallBack = signal<any>('');
  timeShowObs = signal<any>('');

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
      this.calculator.showTimeWithObs().subscribe((res: any)=>{
        this.timeShowObs.set(res);
    })  
  }

  showOf()
  {
    of(1,2,3,6,8,9,12,4,7,2,11,34,45).
    pipe(filter((x: number)=>x%2==0), map((x: number)=>x+1), skip(3), take(2)).
    subscribe((res)=>{
      console.log(`I am in RxJs of method ${res}`);
    });

    this.calculator.ofMy(1,2,3,6,8,9,12,4,7,2,11,34,45).
    pipe(filter((x: number)=>x%2==0)).
    subscribe((res)=>{
      console.log(`I am in MyOf method ${res}`);
    });
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

