import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { GetDataService } from 'src/app/Services/get-data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  upcomingBookings;
  pastBookings;
  sum;
  title: any;

  constructor(private auth: AuthService,private getBookingService:GetDataService) { }

  ngOnInit() {
    this.title=localStorage.getItem('name');
    this.getBookingService.getUpcoming().subscribe(response=>{
      this.upcomingBookings=response;
      this.getBookingService.getPast().subscribe(response=>{
        this.pastBookings=response;
        this.sum=this.upcomingBookings.length+this.pastBookings.length;
        
      })
    })
  }
  onLogout(){
    this.auth.logout()
  }
 
}
