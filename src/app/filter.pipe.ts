import { Pipe, PipeTransform } from '@angular/core';
import { ApiHttpService } from './api-http.service';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  
  constructor(public apiHttpService: ApiHttpService) { }
  transform(value: any, searchtext:string): any {
    if (!searchtext)
      return value;
   return value.filter(it => {
     let optionalData = it.name
      return optionalData.toLowerCase().includes(searchtext.toLowerCase());

    });

  }
}
