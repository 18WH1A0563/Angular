import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from '../manager.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styles: [
  ]
})
export class ManagerLoginComponent implements OnInit {

  public manager : any;
  public loginId : any;
  public password : any;

  constructor(private router: Router, private service : ManagerService, private toastr: ToastrService) {  }

  ngOnInit(){  }
  
  loginUser(){  }
  
  async validateUser(loginForm : any) {
    this.loginId = loginForm.loginId;
    this.password = loginForm.password;
    if(this.loginId === "admin" && this.password === "password"){
      this.service.setUserLoggedIn();
      this.router.navigate(['app-admin-login/app-admin-homepage'])
    }
    else{
    await this.service.getManagerById(this.loginId, this.password).subscribe((result:any) => {this.manager = result;   
      if(this.manager != null){
        this.service.setUserLoggedIn();      
        this.toastr.success("Login successful!", "Success");
        localStorage.setItem('manager', JSON.stringify(this.manager));
        this.router.navigate(['app-manager-homepage']);//,JSON.stringify(this.loginId)]);
      } else{
        alert('Invalid credentials');    
      }
   });
  }
  }
}



