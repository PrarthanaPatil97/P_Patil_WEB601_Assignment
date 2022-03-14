import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { flowerItem } from '../helper-files/contentDb';
import { FlowerServiceService } from '../services/flower-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  title = 'P_Patil_MyFlowers';
  flowerItem: Content[];
  temp = false;
  Available = "";
  NotAvailable = "";
  singleFlower: Content | undefined;
  
  constructor(private flowerService:FlowerServiceService){

    this.flowerItem =[];
    
}


    ngOnInit(): void {
      this.flowerItem = this.flowerService.getFlowerContent();
      this.singleFlower = this.flowerService.getSingleFlower(5);
      
    console.log(this.singleFlower);
    }
    
    newPage(cardNameOnTheTypescriptSide: string): void {
    
   
      this.flowerItem.forEach(f=> {
        if (f.title == cardNameOnTheTypescriptSide ){
          this.temp = true;
        }
      });
      if(this.temp){
        cardNameOnTheTypescriptSide = cardNameOnTheTypescriptSide+" flower available in following list.";
        this.Available = cardNameOnTheTypescriptSide;
        this.NotAvailable = "";
    
      }else{
        cardNameOnTheTypescriptSide = cardNameOnTheTypescriptSide+" flower not available in  the following list.";
        this.NotAvailable = cardNameOnTheTypescriptSide;
        this.Available = "";
      }
      this.temp = false;
      
    }
}

