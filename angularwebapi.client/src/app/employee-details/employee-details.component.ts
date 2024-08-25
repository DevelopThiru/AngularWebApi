import { Component } from '@angular/core';
import { EmployeeServicesService } from '../employee-services.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  employees: any;
  constructor(private empeloyeeService: EmployeeServicesService) {

  }

  ngOnInit() {
    this.empeloyeeService.getEmployeeDetails().subscribe(employee => {
      this.employees = employee
      console.log("Employee Details", this.employees)
    })
  }

}
