import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderName',
})
export class GenderNamePipePipe implements PipeTransform {
  transform(value: string): string {

      if(value.toLowerCase() =='m'){
        return 'Male'
      }
      else {
        return 'FeMale'
      }
  }
}
