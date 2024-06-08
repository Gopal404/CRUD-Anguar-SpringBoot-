import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './services/auth-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'employees', component: EmployeeListComponent, title:'All Employees', canActivate:[AuthGaurdService]},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'create-employee', component: CreateEmployeeComponent, title:'Create Employee',canActivate:[AuthGaurdService]},
  {path:'update-employee/:id', component:UpdateEmployeeComponent, title:'Update Employee',canActivate:[AuthGaurdService]},
  {path:'employee-details/:id', component:EmployeeDetailsComponent, title:'Employee Info',canActivate:[AuthGaurdService]},
  {path:'login', component:LoginComponent, title:'Login'},
  {path:'logout', component:LogoutComponent, canActivate:[AuthGaurdService]},
  {path:'**', component:NotFoundComponent, title:'Not Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
