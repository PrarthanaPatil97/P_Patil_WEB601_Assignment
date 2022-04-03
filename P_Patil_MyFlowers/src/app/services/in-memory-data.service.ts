import { Injectable } from '@angular/core';
import { FlowerPipe } from '../flower.pipe';
import { flowerItem } from '../helper-files/contentDb';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from '../helper-files/content-interface';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb(){
    const content : Content[] = flowerItem;
    return {content}; 
  }   
  genId(content : Content[]): number{
    return content.length > 0 ?
    Math.max(...content.map(c=>c.id ?? 0)) + 1 : 2000;
  }
}
