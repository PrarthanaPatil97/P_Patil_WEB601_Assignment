import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ContentCardComponent } from './content-card/content-card.component';
import { FlowerPipe } from './flower.pipe';
import { ContentListComponent } from './content-list/content-list.component';
import { DefaultImgPipe } from './default-img.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
  
    ContentCardComponent,
       FlowerPipe,
       ContentListComponent,
       DefaultImgPipe,
       HoverAffectDirective,
       ModifyContentComponentComponent,
       MessagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
