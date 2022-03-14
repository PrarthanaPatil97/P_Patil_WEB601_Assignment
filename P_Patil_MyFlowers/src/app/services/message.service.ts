import { Injectable } from '@angular/core';
import { flowerItem } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  messages: string[] = [];

  add(message: string){
    this.messages.push(message);
  }
 
  
  clear(){
    this.messages = [];
  }
}
