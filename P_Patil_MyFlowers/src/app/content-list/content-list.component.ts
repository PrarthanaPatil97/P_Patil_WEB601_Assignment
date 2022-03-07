import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CreateContentComponent } from '../create-content/create-content.component';
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
;

  constructor(){

    this.flowerItem =[{
      id: 0,
      title: "Aconite",
      description: "Aconite flowers are also known as winter aconite.",
      creator: "Tubers or seeds",
      imgURL: "https://www.flowerglossary.com/wp-content/uploads/2017/09/aconite.jpg",
      tags:["Beautiful","Popular"]
    },{
      id: 1,
      title: "Lily",
      description: "Lilies are a highly recognized flower that has bright colors and a strong scent.",
      creator: "Tubers or seeds",
      imgURL: "",
      type: "Spring"
    },{
      id: 2,
      title: "Orchid",
      description: "Orchids can grow to 3 feet tall and make a beautiful gift or addition to your home.",
      creator: "Tubers or seeds",
      imgURL: "https://www.flowerglossary.com/wp-content/uploads/2017/09/orchid.jpg.webp",
      type: "Fall"
    },{
      id: 3,
      title: "Lavender",
      description: " lavender are sweet herb garden favorites that provide soothing fragrances.",
      creator: "Tubers or seeds",
      imgURL: "https://st2.depositphotos.com/2534661/6233/i/600/depositphotos_62333427-stock-photo-lavender-sunset.jpg",
      type: "Fall",
      tags:["Loving","InLove"]
    },{
      id: 4,
      title: "Marigold",
      description: "Beautifully orange and gold in color, marigolds are known to symbolize a desire for wealth and success. ",
      creator: "Tubers or seeds",
      imgURL: "https://www.thespruce.com/thmb/4D5lq4QcjBwbQY6uXqUoHlrBW5I=/804x603/smart/filters:no_upscale()/growing-and-using-calendula-1402626-hero-6c4c4cf97a8940aaabad6975a27358b1-975ec0f7f1144eef8553df0111e7136f.jpg",
      type: "Fall"
    },{
      id: 5,
      title: "Sunflower",
      description: "The disk flowers are brown, yellow, or purple, while the petallike ray flowers are yellow.",
      creator: "Seeds",
      imgURL: "https://cdn.britannica.com/28/122528-050-44846651/Jerusalem-flowers.jpg?w=690&h=388&c=crop",
      type: "Spring",
      tags:["Oil","Seed"]
    },{
      id: 6,
      title: "Voilet",
      description: "Violets are one of the most popular houseplants of all time.",
      creator: "Seeds",
      imgURL: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/11/10/0/CI_AVSA-Winston-J-Goretsky-Pixie-Blue-243-AVSA-7640.jpg.rend.hgtvcom.336.252.suffix/1447165861202.jpeg",
      type: "Spring"
    }
  ];
}


    ngOnInit(): void {
     
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
    
    addContentToList(newContentFromChild: Content) {
      console.log("old array values ", this.flowerItem);
  
      this.flowerItem.push(newContentFromChild);
  
     
      this.flowerItem = [...this.flowerItem]; 
  
      console.log("Did the item get added? ", newContentFromChild);
      console.log("New Flower Added sucesfully",newContentFromChild.title);
      console.log("new array values ", this.flowerItem);
    
  }
}
 let ourPromise = new Promise((success, fail) => {
      let testPass = false;
      if (testPass) {
        success("Success was achieved!");
      }
      else {
        fail("Failure :(");
      }
    });


    ourPromise
      .then(function (successMessage) {
        console.log("The promise succeeded and came back with the following message: ", successMessage);
      })
      .catch(function (failureMessage) {
        console.log("The promise failed and came back with the following message: ", failureMessage);
      });

    

    let getStuff = async function () {
      return "stuff";
    }
    // function async getStuffUsingOldFunctionDefinition(): string{
    //   return "stuff";
    // }
    let getTheSameStuff = async function () {
      return "Similar stuff";
    }

    //different way to represent functions
    let getAllTheStuff = async () => {
      const theFirstStuff = getStuff();
      const theSecondStuff = getTheSameStuff();
      //returns both promises
      return await Promise.all([theFirstStuff, theSecondStuff]);
    }
    getAllTheStuff().then((value) => {
      console.log("First value from the getAllTheStuff method: ", value[0]);
      console.log("Second value from the getAllTheStuff method: ", value[1]);
    });

