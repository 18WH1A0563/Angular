import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService} from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private toastr: ToastrService, private router: Router, private service : AdminService) {
    
   }

  ngOnInit(): void {
  }
  loginUser(){  }
  
  validateUser(loginForm : any) {
    if(loginForm.loginId === "admin" && loginForm.password === "password"){
      this.service.setUserLoggedIn();
      this.router.navigate(['app-admin-login/app-admin-homepage'])
    }
    else{
      this.toastr.error("Wrong credentials!")
    }
  }

}
