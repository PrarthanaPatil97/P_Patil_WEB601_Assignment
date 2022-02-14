import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'flower'
})
export class FlowerPipe implements PipeTransform {

  transform(flowerItem: Content[], tparameter?:string): Content[] {
  
    if(tparameter==null){
      return flowerItem.filter(f =>f.type == null);
    }
    return flowerItem.filter(f=>f.type == tparameter); 
    
  }
}
