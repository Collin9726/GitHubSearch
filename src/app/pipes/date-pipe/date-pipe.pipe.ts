import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: string) {
    let yyyy=value.slice(0,4);
    let mm=value.slice(5,7);
    let dd=value.slice(8,10);
    let slash='/';
    let thisDate=dd.concat(slash,mm,slash,yyyy);
    return thisDate;
  }

}
