import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {

  
  id : number=0;
  employee : Employee= new Employee;
  constructor(private route: ActivatedRoute, private employeeServide: EmployeeService, private router:Router){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeServide.getEmployeeById(this.id).subscribe(data =>{
      this.employee=data;
    })
  }
  goBack() {
    this.router.navigate(['/employees']);
    }
}
