import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';


@Pipe({
  name: 'defaultImg'
})
export class DefaultImgPipe implements PipeTransform {

  transform(flowerItem: Content, imgURL: string ): string {
    return flowerItem.imgURL || imgURL || "https://images2.minutemediacdn.com/image/upload/c_crop,h_1351,w_2400,x_0,y_1049/f_auto,q_auto,w_1100/v1618241852/shape/mentalfloss/94532-gettyimages-1199037273.jpg";
    }

}
