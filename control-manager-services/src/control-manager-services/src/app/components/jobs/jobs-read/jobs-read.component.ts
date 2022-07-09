import { JobsService } from './../jobs.service';
import { Component, OnInit } from '@angular/core';
import { Job } from '../jobs-create/jobs.model';

@Component({
  selector: 'app-jobs-read',
  templateUrl: './jobs-read.component.html',
  styleUrls: ['./jobs-read.component.css']
})
export class JobsReadComponent implements OnInit {

  jobs!: Job[]

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
      this.jobsService.read().subscribe(jobs => {
        this.jobs = jobs
        console.log(jobs)
      })
  }

}
