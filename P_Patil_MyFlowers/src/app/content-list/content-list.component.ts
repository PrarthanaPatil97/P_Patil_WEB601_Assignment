import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { flowerItem } from '../helper-files/contentDb';
import { FlowerServiceService } from '../services/flower-service.service';
import { ModifyContentComponentComponent } from '../modify-content-component/modify-content-component.component';
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
    

let ourPromise = new Promise((success, fail) => {
  let testPass = false;
  if (testPass) {
    success("Success was achieved!");
  }
  else {
    fail("Failure :(");
  }
});

console.log("First console log");

ourPromise
  .then(function (successMessage) {
    console.log("The promise succeeded and came back with the following message: ", successMessage);
    })
  .catch(function (failureMessage) {
    console.log("The promise failed and came back with the following message: ", failureMessage);
  });

console.log("Fourth console log");

let getStuff = async function () {
  return "stuff";
}

let getTheSameStuff = async function () {
  return "Similar stuff";
}


let getAllTheStuff = async () => {
  const theFirstStuff = getStuff();
  const theSecondStuff = getTheSameStuff();
  
  return await Promise.all([theFirstStuff, theSecondStuff]);
}
getAllTheStuff().then((value) => {
  console.log("First value from the getAllTheStuff method: ", value[0]);
  console.log("Second value from the getAllTheStuff method: ", value[1]);
});

}



    ngOnInit(): void {
      this.getContentFromServer();
    }
    
    getContentFromServer(): void{
      this.flowerService.getContent().subscribe(flowerArray => this.flowerItem = flowerArray);
    }

    updatePage(cardNameOnTheTypescriptSide: string): void {
    
   
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
    /* addFlowerToList(newFlower : Content){
      
    
        this.flowerItem.push(newFlower);
        this.flowerItem = Object.assign([], this.flowerItem);
        this.flowerItem = [...this.flowerItem];
        console.log("New Flower Item added successfully.")
    } */
      updateContentInList(contentItem: Content): void {
    
    
        this.flowerService.updateContent(contentItem).subscribe(() => {
          console.log("Content updated successfully");
          this.getContentFromServer();
        });
      }
    
      addContentToList(newContentFromChild: Content): void {
        this.flowerService.addContent(newContentFromChild).subscribe(newContentFromServer =>{
          console.log("New  Content from server:",newContentFromServer);
        

          this.flowerItem.push(newContentFromServer);
          this.flowerItem = [...this.flowerItem]; // using the spread operator
    
        });
      }
    
    }


