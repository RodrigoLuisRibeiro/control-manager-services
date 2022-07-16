import { MatDialogRef } from '@angular/material/dialog';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { JobsService } from './../jobs.service';
import { Component, OnInit } from '@angular/core';
import { Job } from './jobs.model';
import * as moment from 'moment';

@Component({
  selector: 'app-jobs-create',
  templateUrl: './jobs-create.component.html',
  styleUrls: ['./jobs-create.component.css']
})
export class JobsCreateComponent implements OnInit {

  job: Job = {
    name: '',
    tipo: '',
    preco: 0,
    observacao: '',
    date: '',
    time: ''
  }

  constructor(
    private jobService: JobsService, 
    private router: Router,) { }

  ngOnInit(): void {
   
  }

  createJobs(): void {
    let newDate: moment.Moment = moment.utc(this.job.date).local();
    this.job.date = newDate.format("YYYY-MM-DD") + "T" + this.job.time;
    this.jobService.create(this.job).subscribe(() => {
    this.jobService.showMessage('Serviço adicionado com sucesso!')
    this.router.navigate(['/jobs'])
    })   
  }

  cancelJobs(): void {
    this.router.navigate(['/jobs']) 
  }

}
