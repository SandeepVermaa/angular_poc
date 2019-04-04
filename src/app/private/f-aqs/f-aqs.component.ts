import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { GetDataService } from 'src/app/Services/get-data.service';

@Component({
  selector: 'app-f-aqs',
  templateUrl: './f-aqs.component.html',
  styleUrls: ['./f-aqs.component.css']
})
export class FAQsComponent implements OnInit {
  FAQs: any;

  constructor(private head: DataService,
    private getFAQservice:GetDataService) { }

  ngOnInit() {
    this.head.changeMessage("FAQ's");
    this.getFAQservice.getfaqs().subscribe(response=>{
      this.FAQs=response;
    })
  }
 

}
