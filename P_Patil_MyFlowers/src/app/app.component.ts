import { ApplicationRef, Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, first, interval } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { LogUpdateService } from './log-update.service';
import { FlowerServiceService } from './services/flower-service.service';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

 title:string;
 birthday: Date;
  log: any;
  constructor(private logService: LogUpdateService, private appRef: ApplicationRef, private updates: SwUpdate){
    
    this.birthday = new Date();


    this.title = 'Header 1';
}
  ngOnInit(): void {
    this.log.init();
    const appIsStable$ = this.appRef.isStable.pipe(
      first(isStable => isStable === true));
      const everyHour$ = interval(1 * 60 * 60 * 1000);
      const everyHourOnceAppIsStable$ =
      concat(appIsStable$, everyHour$);
      everyHourOnceAppIsStable$.subscribe(
      () => this.updates.checkForUpdate());
  }


/* newPage(cardNameOnTheTypescriptSide: string): void {
    
   
  this.flowerItem.forEach(f=> {
    if (f.title == cardNameOnTheTypescriptSide ){
      this.temp = true;
    }
  });

} */
}
