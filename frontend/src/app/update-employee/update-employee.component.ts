import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {
  id:number=0;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute,private router:Router ) { }
  employee: Employee = new Employee();

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    },error=>console.log(error)); 
   
  }
  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data=>{
      this.goToEmployeeList();
    },(error) => {
      $('#errorModal').modal('show');  // Show the Bootstrap modal
    });
  }
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }


}
