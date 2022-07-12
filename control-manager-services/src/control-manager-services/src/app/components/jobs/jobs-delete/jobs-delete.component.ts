import { JobsService } from './../jobs.service';
import { Component, OnInit } from '@angular/core';
import { Job } from '../jobs-create/jobs.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jobs-delete',
  templateUrl: './jobs-delete.component.html',
  styleUrls: ['./jobs-delete.component.css']
})
export class JobsDeleteComponent implements OnInit {

  job!: Job;

  constructor(
    private jobsService: JobsService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.jobsService.readById(id!).subscribe(job => {
      this.job = job;
    })
  }

  deleteJobs(): void {
    this.jobsService.delete(this.job.id!).subscribe(() => {
        this.jobsService.showMessage("Serviço excluido com sucesso!")
        this.router.navigate(["/jobs"]);
  });
  }
  
  cancelJobs(): void { 
    this.router.navigate(['/jobs']);
  }
}

