import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string[], search : string): string[] {
    return value.filter(v => v.toLowerCase().includes(search.toLowerCase()));
  }

}
