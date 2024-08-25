import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesService {

  private baseurl = 'https://localhost:7209/api/';
  constructor(private http: HttpClient) { }
  getEmployeeDetails(): Observable<any> {
    return this.http.get<any>(`${this.baseurl}Employee`)
      .pipe(
        catchError(error => {
          console.log("While thwe Employee Details", error);
          return throwError(error)
        })
      )
  }

  addEmployee(employee: Employee): Observable<Employee> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Employee>(`${this.baseurl}Employee/`, employee, httpOptions)
      .pipe(
        catchError(error => {
          console.error('Error adding employee:', error);
          return throwError(error);
        })
      );
  }
  

  getEmployeeByID(id: number): Observable<Employee> {
    return this.http.get<any>(`${this.baseurl}Employee/${id}`)
      .pipe(
        catchError(error => {
          console.log("While thwe Employee Details", error);
          return throwError(error)
        })
      )
  }

  UpdateEmployeeDetails(id: number, employee: Employee): Observable<Employee> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<Employee>(`${this.baseurl}Employee/${id}`, employee, httpOptions)
      .pipe(
        catchError(error => {
          console.log("Update the EmployeeDetails", error);
          return throwError(error)
        })
      )
  }

  DeleteEmployeeDetails(id: number): Observable<any> {
  
    return this.http.delete<any>(`${this.baseurl}Employee/${id}`)
      .pipe(
        catchError(error => {
          console.log("While thwe Employee Details", error);
          return throwError(error)
        })
      )
  }
}

