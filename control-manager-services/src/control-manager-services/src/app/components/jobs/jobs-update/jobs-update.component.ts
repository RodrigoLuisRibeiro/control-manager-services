import { Job } from './../jobs-create/jobs.model';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsService } from './../jobs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-update',
  templateUrl: './jobs-update.component.html',
  styleUrls: ['./jobs-update.component.css']
})
export class JobsUpdateComponent implements OnInit {

  job!: Job;

  constructor(
    private jobService: JobsService, 
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.jobService.readById(id!).subscribe(job => {
      this.job = job;
    });
  }

  updateJobs(): void {
      this.jobService.update(this.job).subscribe(() => {
        this.jobService.showMessage("Serviço atualizado com sucesso!");
        this.router.navigate(["jobs"]);
      })
  }

  cancelJobs(): void {
    this.router.navigate(['/jobs'])
  }
}
