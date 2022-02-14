import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flowerPipe'
})
export class FlowerPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
