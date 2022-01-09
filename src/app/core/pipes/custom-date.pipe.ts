import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  transform(value: string): string {
    return this.getDate(value);
  }

  getDate(isoDate: string): string {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    const finalDate = `${day}/${month}/${year}`;
    return finalDate;
  }
}
