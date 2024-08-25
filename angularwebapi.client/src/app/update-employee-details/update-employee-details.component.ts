import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServicesService } from '../employee-services.service';

@Component({
  selector: 'app-update-employee-details',
  templateUrl: './update-employee-details.component.html',
  styleUrls: ['./update-employee-details.component.css']
})
export class UpdateEmployeeDetailsComponent {

  updateEmployeeForm!: FormGroup;
  employee!: Employee;
  constructor(private employeeService: EmployeeServicesService, private fb: FormBuilder, private router: Router, private roure: ActivatedRoute) {
   
  }

  ngOnInit() {
    this.updateEmployeeForm = this.fb.group({
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

        this.updateEmployeeForm.patchValue({
          employeeName: employee.employeeName,
          employeeage: employee.employeeAge,
          employeeEmail: employee.employeeEmail,
          employeeNumber: employee.employeeNumber,
        })
      } );
  }

  onSubmitForm() {
    const employeeId = +this.roure.snapshot.paramMap.get('employeeId')!;
    if (this.updateEmployeeForm.valid) {
      this.employee = {
        employeeID: employeeId,
        employeeName: this.updateEmployeeForm.value.employeeName,
        employeeAge: this.updateEmployeeForm.value.employeeage,
        employeeEmail: this.updateEmployeeForm.value.employeeEmail,
        employeeNumber: this.updateEmployeeForm.value.employeeNumber,
        
      }
      this.employeeService.UpdateEmployeeDetails(employeeId, this.employee).
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
