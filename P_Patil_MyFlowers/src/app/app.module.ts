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
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from './services/in-memory-data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 500
    }),
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
