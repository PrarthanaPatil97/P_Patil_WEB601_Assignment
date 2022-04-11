import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { FlowerServiceService } from './services/flower-service.service';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

 title:string;
 birthday: Date;
  constructor(){
    
    this.birthday = new Date();


    this.title = 'Header 1';
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


/* newPage(cardNameOnTheTypescriptSide: string): void {
    
   
  this.flowerItem.forEach(f=> {
    if (f.title == cardNameOnTheTypescriptSide ){
      this.temp = true;
    }
  });

} */
}
