import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName',
})
export class FullNamePipePipe implements PipeTransform {
  transform(firstName: unknown, lastName: string, gender: string): unknown {
     if(gender.toLowerCase()=='m'){
         return `Mr. ${firstName} ${lastName}`;
    }
      return `Miss. ${firstName} ${lastName}`;
  }
}
