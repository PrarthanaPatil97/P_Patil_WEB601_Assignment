import { Content } from '../helper-files/content-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlowerServiceService } from '../services/flower-service.service';
@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss']
})
export class ContentDetailsComponent implements OnInit {
  id?: number;
  flowerItem?: Content;
  constructor(private route: ActivatedRoute, private flowerService: FlowerServiceService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? "0"); // uses the + unary operator
      this.flowerService.getContentItem(this.id).subscribe(
        (c) => {
          this.flowerItem = c;
        });
    });
  }

}
