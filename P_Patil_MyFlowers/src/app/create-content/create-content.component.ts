import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  @Output() newContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newContent?: Content;

  constructor() { }

  ngOnInit(): void {
  }

  addContent(id: string, title: string,  description: string, creator: string,tags: string, type:string): void {
    this.newContent = {
      id: parseInt(id),
      title: title,
      description:description , 
      creator: creator,
      tags: tags.split(","),
      type:type
    };
    this.newContentEvent.emit(this.newContent);
  }
}
