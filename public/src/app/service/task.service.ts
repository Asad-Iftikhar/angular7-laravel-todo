import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Task } from '../shared/task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  
  // Define API
  apiURL = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch task list
  getTasks(): Observable<Task> {
    return this.http.get<Task>(this.apiURL + 'tasks')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch task
  getTask(id): Observable<Task> {
    return this.http.get<Task>(this.apiURL + 'tasks/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create task
  createTask(task): Observable<Task> {
    return this.http.post<Task>(this.apiURL + 'tasks', JSON.stringify(task), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update task
  updateTask(id, task): Observable<Task> {
    return this.http.put<Task>(this.apiURL + 'tasks/' + id, JSON.stringify(task), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete task
  deleteTask(id){
    return this.http.delete<Task>(this.apiURL + 'tasks/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}