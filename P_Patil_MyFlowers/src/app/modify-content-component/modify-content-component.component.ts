import { Content } from '../helper-files/content-interface';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';



@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {

  @Output() newContentAdd: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateContentAdd: EventEmitter<Content> = new EventEmitter<Content>();
  newContent?: Content;

  @ViewChild('title')
  inputTitle!: { nativeElement: { value: string; }; };

  @ViewChild('id')
  inputId!: { nativeElement: { value: string; }; };
  
  @ViewChild('description')
  inputDesc!: { nativeElement: { value: string; }; };
  
  @ViewChild('creator')
  inputPrice!: { nativeElement: { value: string; }; };
  
  @ViewChild('type')
  inputType!: { nativeElement: { value: string; }; };
  
  @ViewChild('tags')
  inputTag!: { nativeElement: { value: string; }; };

  @ViewChild('imageUrl')
  inputImg!: { nativeElement: { value: string; }; };
  

  constructor() { }

  ngOnInit(): void 
  {
  }
  addContent(title:string,imgURL:string,description:string,creator:string,type:string,tags:string): void{
    this.newContent = {
      //id:parseInt(id),
      title:title,
      imgURL: imgURL,
      description: description,
      creator: creator,
      type : type,
      tags : tags.split(",")
    };
    this.newContentAdd.emit(this.newContent);
    this.inputTitle.nativeElement.value = '';
    this.inputId.nativeElement.value = '';
    this.inputDesc.nativeElement.value = '';
    this.inputPrice.nativeElement.value = '';
    
    this.inputTag.nativeElement.value = '';
    this.inputImg.nativeElement.value = '';
  }
  updateContent(id:string, title:string,imgURL:string,description:string,creator:string,type:string,tags:string): void{
    this.newContent = {
      id:parseInt(id),
      title:title,
      imgURL: imgURL,
      description: description,
      creator: (creator),
      type : type,
      tags : tags.split(",")
    };
    this.updateContentAdd.emit(this.newContent);
    this.inputTitle.nativeElement.value = '';
    this.inputId.nativeElement.value = '';
    this.inputDesc.nativeElement.value = '';
    this.inputPrice.nativeElement.value = '';
    
    this.inputTag.nativeElement.value = '';
    this.inputImg.nativeElement.value = '';
    
  }

}