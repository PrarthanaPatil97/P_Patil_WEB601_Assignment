import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'P_Patil_MyFlowers';
  flowerItem: Content[];

  constructor(){

    this.flowerItem =[{
      id: 0,
      title: "Aconite",
      description: "Aconite flowers are also known as winter aconite.",
      creator: "Tubers or seeds",
      imgURL: "https://www.flowerglossary.com/wp-content/uploads/2017/09/aconite.jpg"
    },{
      id: 1,
      title: "Lily",
      description: "Lilies are a highly recognized flower that has bright colors and a strong scent.",
      creator: "Tubers or seeds",
      imgURL: "https://www.flowerglossary.com/wp-content/uploads/2017/09/lily-flower.jpg.webp",
      type: "Blooms in spring"
    },{
      id: 2,
      title: "Orchid",
      description: "Orchids can grow to 3 feet tall and make a beautiful gift or addition to your home.",
      creator: "Tubers or seeds",
      imgURL: "https://www.flowerglossary.com/wp-content/uploads/2017/09/orchid.jpg.webp",
      type: "Blooms in Early fall"
    },{
      id: 3,
      title: "Lavender",
      description: " lavender are sweet herb garden favorites that provide soothing fragrances.",
      creator: "Tubers or seeds",
      imgURL: "https://www.1800flowers.com/blog/wp-content/uploads/2021/04/Lavender167351986-1024x235.jpg",
      type: "Blooms in Early fall"
    },{
      id: 4,
      title: "Marigold",
      description: "Beautifully orange and gold in color, marigolds are known to symbolize a desire for wealth and success. ",
      creator: "Tubers or seeds",
      imgURL: "https://www.1800flowers.com/blog/wp-content/uploads/2021/04/Marigold_319450281-1024x235.jpeg",
      type: "Blooms in Early fall"
    },{
      id: 5,
      title: "Violet",
      description: "The violet is February birth flower, and the state flower of Illinois",
      creator: "Tubers or seeds",
      imgURL: "https://www.1800flowers.com/blog/wp-content/uploads/2021/04/Violet_256830949-1024x235.jpg",
      type: "Blooms in Early fall"
    },
  ];
}
}
