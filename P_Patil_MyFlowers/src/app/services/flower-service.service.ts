
import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { flowerItem } from '../helper-files/contentDb';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlowerServiceService {

  private httpOptons ={
    headers : new HttpHeaders({'Content-type' : 'application/json' })
  };

  constructor(private msgService:MessageService, private http: HttpClient) { }

  getContent(): Observable<Content[]>{
    this.msgService.add('Flower List is provided');
    return this.http.get<Content[]>("api/content");

  }
  addContent(flowerItem : Content): Observable<Content>{
    this.msgService.add('New Item Added');
    return this.http.post<Content>("api/content",flowerItem,this.httpOptons);
  }

  updateContent(flowerItem : Content): Observable<any>{
    this.msgService.add('Item is Updated.') ;
    return this.http.put("api/content", flowerItem, this.httpOptons);
  }

 
}
