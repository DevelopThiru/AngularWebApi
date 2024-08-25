import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServicesService } from '../employee-services.service';

@Component({
  selector: 'app-delete-employee-details',
  templateUrl: './delete-employee-details.component.html',
  styleUrls: ['./delete-employee-details.component.css']
})
export class DeleteEmployeeDetailsComponent {

  deleteEmployeeForm!: FormGroup;
  employee!: Employee;
  constructor(private employeeService: EmployeeServicesService, private fb: FormBuilder, private router: Router, private roure: ActivatedRoute) {

  }

  ngOnInit() {
    this.deleteEmployeeForm = this.fb.group({
      employeeName: ['', Validators.required],
      employeeage: ['', Validators.required],
      employeeEmail: ['', Validators.required],
      employeeNumber: ['', Validators.required],
    });
    const employeeId = +this.roure.snapshot.paramMap.get('employeeId')!;
    this.loadEmployeeDetails(employeeId);
  }

  loadEmployeeDetails(employeeID: number) {
    console.log('Loading details for employee ID:', employeeID);
    this.employeeService.getEmployeeByID(employeeID).subscribe(
      employee => {
        console.log("Fetched the Details", employee);

        this.deleteEmployeeForm.patchValue({
          employeeName: employee.employeeName,
          employeeage: employee.employeeAge,
          employeeEmail: employee.employeeEmail,
          employeeNumber: employee.employeeNumber,
        })
      });
  }

  onSubmitForm() {
    const employeeId = +this.roure.snapshot.paramMap.get('employeeId')!;
    if (this.deleteEmployeeForm.valid) {
      this.employee = {
        employeeID: employeeId,
        employeeName: this.deleteEmployeeForm.value.employeeName,
        employeeAge: this.deleteEmployeeForm.value.employeeage,
        employeeEmail: this.deleteEmployeeForm.value.employeeEmail,
        employeeNumber: this.deleteEmployeeForm.value.employeeNumber,

      }
      this.employeeService.DeleteEmployeeDetails(employeeId).
        subscribe(() => {
          this.router.navigate(['/EmloyeeDeteails']);
        },
          error => {
            console.log("Updated Fail", error)
          }
        )
    }
  }

}
