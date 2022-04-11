import { Component, Input, OnInit } from '@angular/core';
import{Content} from '../helper-files/content-interface';
import { ModifyContentComponentComponent } from '../modify-content-component/modify-content-component.component';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() flowerItem: Content;

  constructor() {
    this.flowerItem = { id: 0, title: '',description:'', creator: '', imgURL: '' };
  }
  

  ngOnInit(): void {
    
  }

  imageClicked(): void {
    console.log("ID: ", this.flowerItem?.id, ", Title: ", this.flowerItem?.title);
  }

}
