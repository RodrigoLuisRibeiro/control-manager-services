import { JobsService } from './../jobs.service';
import { Component, OnInit } from '@angular/core';
import { Job } from '../jobs-create/jobs.model';
import { MatDialog } from '@angular/material/dialog';
import { TextDialogComponent } from '../../text-dialog/text-dialog.component';

@Component({
  selector: 'app-jobs-read',
  templateUrl: './jobs-read.component.html',
  styleUrls: ['./jobs-read.component.css']
})
export class JobsReadComponent implements OnInit {

  jobs!: Job[]
  displayedColumns = 
  ['id', 'name', 'tipo', 'preco', 'date', 'time', 'observacao', 'action']

  constructor(private jobsService: JobsService, public dialog: MatDialog) { }

  ngOnInit(): void {
      this.jobsService.read().subscribe(jobs => {
        this.jobs = jobs
        console.log(jobs)
      })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TextDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
