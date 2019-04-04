import { Component, OnInit } from '@angular/core';
import { DeliverStatusService } from './deliver-status.service';

@Component({
  selector: 'app-deliver-status',
  templateUrl: './deliver-status.component.html',
  styleUrls: ['./deliver-status.component.css']
})
export class DeliverStatusComponent implements OnInit {

  constructor(private deliveryStatusService:DeliverStatusService) { }
  deliveries: any = [];

  ngOnInit() {
    this.deliveryStatusService.getDeliveries().subscribe(data=>{
      this.deliveries = data;
    });
  }

}
