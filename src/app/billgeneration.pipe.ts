import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'billgeneration'
})
export class BillgenerationPipe implements PipeTransform {

  transform(source: any, destination : any): any {
    if(source === "Lucknow" && destination === "Ranchi"){
      return '7420';

    }
  }

}
