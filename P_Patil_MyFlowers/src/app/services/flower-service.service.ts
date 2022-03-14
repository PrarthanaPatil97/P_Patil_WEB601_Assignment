
import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { flowerItem } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class FlowerServiceService {

  constructor(private msgService:MessageService) { }

  getFlowerContent(): Content[] { 
    this.msgService.add('Flower array loaded!');
    return flowerItem;
  }

  getSingleFlower(id: number): Content{
    this.msgService.add('Flower Item at id: '+ id) ;
    return flowerItem[id];
  }

}

