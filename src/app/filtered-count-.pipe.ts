import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteredCount'
})
export class FilteredCountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
