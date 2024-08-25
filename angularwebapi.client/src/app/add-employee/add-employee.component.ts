import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { Router } from '@angular/router'
import { EmployeeServicesService } from '../employee-services.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  addEmployeeForm: FormGroup; // Remove ! to use non-null assertion

  constructor(private employeeService: EmployeeServicesService, private fb: FormBuilder, private router: Router) {
    this.addEmployeeForm = this.fb.group({
      employeeName: ['', Validators.required],
      employeeage: ['', Validators.required],
      employeeEmail: ['', Validators.required],
      employeeNumber: ['', Validators.required],
    });
  }

  onSubmitForm() {
    if (this.addEmployeeForm.valid) {
      const employee: Employee = {
        employeeID: 0,
        employeeName: this.addEmployeeForm.value.employeeName,
        employeeAge: this.addEmployeeForm.value.employeeage,
        employeeEmail: this.addEmployeeForm.value.employeeEmail,
        employeeNumber: this.addEmployeeForm.value.employeeNumber,
      };

      this.employeeService.addEmployee(employee).subscribe(() => {
        console.log("add Employee", employee)
        this.router.navigate(['/EmloyeeDeteails'])
      })
    }
  }
}
