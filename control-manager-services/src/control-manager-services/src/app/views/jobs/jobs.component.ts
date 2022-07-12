import { Header2Service } from './../../components/header2/header2.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

                //Dependency Injection
  constructor(private router: Router, private headerService: Header2Service) {
    headerService.headerData = {
      title: 'Cadastro de Serviços',
      icon: 'work',
      routeUrl: '/jobs'
    }
   }

  ngOnInit(): void {
  }

  navigateToJobsCreate(): void {
    this.router.navigate(['/jobs/create'])
  }

}
