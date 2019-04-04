import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/Services/get-data.service';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  upcomingBookings: any;
  pastBookings: any;
  booking: boolean;

  constructor( private getBookingService:GetDataService, private head: DataService ) { }

  ngOnInit() {
    this.head.changeMessage("Booking")
    this.onUpcoming();
  }
  onUpcoming(){
    this.booking = true;
    this.getBookingService.getUpcoming().subscribe(response=>{
      this.upcomingBookings=response;
    })
  }
  onPast(){
    this.booking = false;
    this.getBookingService.getPast().subscribe(response=>{
      this.pastBookings=response;
    })
  }


}
