import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {

  constructor(private toastr: ToastrService,private service : AdminService, private router : Router) { 
    //this.toastr.success("Welcome admin", "LOGIN");
  }

  ngOnInit(): void {
    
  }

  addManager():any{
    this.router.navigate(['app-admin-login/app-admin-homepage/app-reg-manager']);
  }

  getAllManagers():any{
    this.router.navigate(['app-admin-login/app-admin-homepage/app-show-managers']);
  }

  getAllDrivers():any{
    this.router.navigate(['app-admin-login/app-admin-homepage/app-show-all-drivers']);
  }

  seeAllRequests():any{
    this.router.navigate(['app-admin-login/app-admin-homepage/app-show-all-customers']);
  }

  seeAllRecords():any{
    this.router.navigate(['app-admin-login/app-admin-homepage/app-all-records']);
  }

  addAds():any{
    this.router.navigate(['app-admin-login/app-admin-homepage/app-advertisement']);
  }

  logout():void{
    this.service.setUserLoggedOut();
      this.router.navigate(['/']);
  }

  regDriver():any{
    this.router.navigate(['app-admin-login/app-admin-homepage/app-reg-driver-admin']);
  }
}
