import { Router } from '@angular/router';
import { JobsService } from './../jobs.service';
import { Component, OnInit } from '@angular/core';
import { Job } from './jobs.model';

@Component({
  selector: 'app-jobs-create',
  templateUrl: './jobs-create.component.html',
  styleUrls: ['./jobs-create.component.css']
})
export class JobsCreateComponent implements OnInit {

  job: Job = {
    name: '',
    tipo: ''
  }

  constructor(private jobService: JobsService, 
  private router: Router) { }

  ngOnInit(): void {
    
  }

  createJobs(): void {
    this.jobService.create(this.job).subscribe(() => {
        this.jobService.showMessage('Serviço adicionado com sucesso!')
        this.router.navigate(['/jobs'])
    })   
  }

  cancelJobs(): void {
    this.router.navigate(['/jobs']) 
  }

}
