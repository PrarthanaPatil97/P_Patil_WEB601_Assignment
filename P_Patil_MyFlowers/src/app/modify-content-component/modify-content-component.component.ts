import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {

  @Output() newFlowerAdd: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateFlowerAdd: EventEmitter<Content> = new EventEmitter<Content>();
  newFlower?: Content;

  @ViewChild('id')
  inputId!: { nativeElement: { value: string; }; };
  @ViewChild('title')
  inputTitle!: { nativeElement: { value: string; }; };

 
  
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
  addFlower(title:string,imgURL:string,description:string,creator:string,type:string,tags:string): void{
    this.newFlower = {
      //id:parseInt(id),
      title: title,
      imgURL: imgURL,
      description: description,
      creator: creator,
      type : type,
      tags : tags.split(",")
    };
    this.newFlowerAdd.emit(this.newFlower);
    this.inputTitle.nativeElement.value = '';
    this.inputId.nativeElement.value = '';
    this.inputDesc.nativeElement.value = '';
    this.inputPrice.nativeElement.value = '';
    
    this.inputTag.nativeElement.value = '';
    this.inputImg.nativeElement.value = '';
  }
  updateTour(id:string, title:string,imgURL:string,description:string,creator:string,type:string,tags:string): void{
    this.newFlower = {
      id:parseInt(id),
      title:title,
      imgURL: imgURL,
      description: description,
      creator: (creator),
      type : type,
      tags : tags.split(",")
    };
    this.updateFlowerAdd.emit(this.newFlower);
    this.inputTitle.nativeElement.value = '';
    this.inputId.nativeElement.value = '';
    this.inputDesc.nativeElement.value = '';
    this.inputPrice.nativeElement.value = '';
    
    this.inputTag.nativeElement.value = '';
    this.inputImg.nativeElement.value = '';
  }

}