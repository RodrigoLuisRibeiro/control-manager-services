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

  public jobForm!: FormGroup;

  constructor(
    
    private formBuilder: FormBuilder,
    private jobService: JobsService, 
    private router: Router,) { }

  ngOnInit(): void {
    this.jobForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        tipo: ['', [Validators.required]],
        preco: ['', [Validators.required]],
        observacao: ['', [Validators.required]],
        date: ['', [Validators.required]],
        time: ['', [Validators.required]]
    })
  }

  createJobs(): void {
    let newDate: moment.Moment = moment.utc(this.jobForm.value.date).local();
    this.jobForm.value.date = newDate.format("DD-MM-YYYY") + " h " + this.jobForm.value.time;
    console.log(this.jobForm.value);
    this.jobService.create(this.jobForm.value).subscribe(() => {
    this.jobService.showMessage('Serviço adicionado com sucesso!')
    this.router.navigate(['/jobs'])
    });
    
       this.jobForm.reset();
  }

  cancelJobs(): void {
    
    this.jobForm.reset();
    this.router.navigate(['/jobs']) 
  }

}
