import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { MessageService } from './services/message.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'P_Patil_MyFlowers';
  temp = false;
  flowerItem: Content[];
  
  constructor(public msgService: MessageService){
    this.flowerItem =[];
    
}


newPage(cardNameOnTheTypescriptSide: string): void {
    
   
  this.flowerItem.forEach(f=> {
    if (f.title == cardNameOnTheTypescriptSide ){
      this.temp = true;
    }
  });

}
}
