import { Observable } from 'rxjs';
import { Job } from './jobs-create/jobs.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  baseUrl = "http://localhost:3000/servicos"

  constructor(private snackBar: MatSnackBar, private http:HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: 'top'
    })
  }

  create(job: Job): Observable<Job> {
    return this.http.post<Job>(this.baseUrl, job)
  }

  read():Observable<Job[]>{
    return this.http.get<Job[]>(this.baseUrl)
  }
}
