import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  myList: ContentList;

  constructor(){

    this.myList = new ContentList();
    console.log("my list contains these items: ", this.myList.items);

    this.myList.addItem({
      id: 0,
      title: "Aconite",
      description: "Aconite flowers are also known as winter aconite.",
      creator: "Tubers or seeds",
      imgURL: "https://www.flowerglossary.com/wp-content/uploads/2017/09/aconite.jpg"
    });
    this.myList.addItem({
      id: 1,
      title: "Lily",
      description: "Lilies are a highly recognized flower that has bright colors and a strong scent.",
      creator: "Tubers or seeds",
      imgURL: "https://www.flowerglossary.com/wp-content/uploads/2017/09/lily-flower.jpg.webp",
      type: "Blooms in spring"
    });
    this.myList.addItem({
      id: 2,
      title: "Orchid",
      description: "Orchids can grow to 3 feet tall and make a beautiful gift or addition to your home.",
      creator: "Tubers or seeds",
      imgURL: "https://www.flowerglossary.com/wp-content/uploads/2017/09/orchid.jpg.webp",
      type: "Blooms in Early fall"
    });

    console.log("my list contains these items: ", this.myList.items);


    console.log("The length of the array is:  ", this.myList.numberOfItems());

    console.log("THe html output is: ", this.myList.getHtml(0));

    // myList.items = [];
  }

  ngOnInit(): void {
  }

}
