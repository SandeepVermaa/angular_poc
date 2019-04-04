import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string;

  constructor(private head: DataService) { }

  ngOnInit() {
    this.head.currentMessage.subscribe(message => this.title = message)
  }

}
