import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyValue',
  pure: false
})
export class KeyValuePipe implements PipeTransform {
  currentState: any;
  result: any;
  wrper(value: Array<any>,master: Array<any>){
  
    if(this.currentState==JSON.stringify(value)){
        return this.result;
    }
      this.result=  this.transform(value,master);
      this.currentState = JSON.stringify(value);
  }

  transform(value: Array<any>, master: Array<any>): Array<any> {
    return value.map((x) => {
      const index = master.findIndex(y=> y.id == x);
      if(index > -1)
      {
        return master[index].Name
      }
      return ''
     })
  }
}
