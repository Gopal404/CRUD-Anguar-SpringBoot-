import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  standalone: false,
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  employees: Employee[] = [];
    


  constructor(private employeeService: EmployeeService, private router: Router) {
    // You can initialize properties or perform other setup here
  }

  // Implement OnInit interface
  ngOnInit(): void {
  this.getEmployees();
  }
  private getEmployees()
  {
    this.employeeService.getEmployeesList().subscribe(data=>{
      this.employees= data; 
    });
  }

  updateEmployee(id:number)
  {
    this.router.navigate(['/update-employee',id])
  }
  

  deleteEmployee(id:number)
  {
    this.employeeService.deleteEmployee(id).subscribe(data =>{
      console.log(data);
      this.getEmployees();

    })
  }

  employeeDetails(id:number)
  {
    this.router.navigate(['/employee-details',id])
  }

}
