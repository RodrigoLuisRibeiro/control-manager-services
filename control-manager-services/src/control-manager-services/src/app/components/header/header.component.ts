import { Component, OnInit } from '@angular/core';
import { Header2Service } from '../header2/header2.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string = 'Control Manager Services';  
  constructor(private header2Service: Header2Service) { }

  ngOnInit(): void {
  }

get title(): string {
   return this.header2Service.headerData.title;
  }

  get icon(): string {
   return this.header2Service.headerData.icon;
  }

  get routeUrl(): string {
   return this.header2Service.headerData.routeUrl;
  }

}
