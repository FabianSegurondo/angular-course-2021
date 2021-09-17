import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toString'
})
export class BooltoStringPipe implements PipeTransform {
  transform(value: boolean, ): string {
    let ans = 'NO'
    if(value){
      ans = 'YES'
    }
    return ans;
  }

}