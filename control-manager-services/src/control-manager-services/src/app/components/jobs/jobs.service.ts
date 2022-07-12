import { catchError, EMPTY, map, Observable } from 'rxjs';
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

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(job: Job): Observable<Job> {
    return this.http.post<Job>(this.baseUrl, job).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read():Observable<Job[]>{
    return this.http.get<Job[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Job> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Job>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(job: Job): Observable<Job> {
    const url = `${this.baseUrl}/${job.id}`
    return this.http.put<Job>(url, job).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Job>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Job>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

    errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro inesperado!", true);
    return EMPTY;
  }
}
