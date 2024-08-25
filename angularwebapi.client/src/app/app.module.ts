import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeDetailsComponent } from './update-employee-details/update-employee-details.component';
import { DeleteEmployeeDetailsComponent } from './delete-employee-details/delete-employee-details.component';



const appRoutes: Routes = [
  { path: '', component: EmployeeDetailsComponent },
  { path: 'EmloyeeDeteails', component: EmployeeDetailsComponent },
  { path: 'AddEmployee', component: AddEmployeeComponent },
  { path: 'UpdateEmployee/:employeeId', component: UpdateEmployeeDetailsComponent },

  { path: 'DeleteEmployee/:employeeId', component: DeleteEmployeeDetailsComponent },



]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    UpdateEmployeeDetailsComponent,
    DeleteEmployeeDetailsComponent,

  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
