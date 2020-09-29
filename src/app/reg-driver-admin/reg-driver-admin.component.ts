import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from "@angular/router";
import {ToastrService} from 'ngx-toastr';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-reg-driver-admin',
  templateUrl: './reg-driver-admin.component.html',
  styles: [
  ]
})
export class RegDriverAdminComponent implements OnInit {

  public driver:any;
  public loginId:any;
  public manager : any;

  constructor(private service : AdminService,  private activatedRoute: ActivatedRoute,  private toastr: ToastrService) {
    
    this.driver = {driverBranch:'', driverName: '', driverPhone: '', 
                   driverStatus : null ,salary: 5000, vehicleCharges: '',
                   vehicleId: '', vehicleType: '', 
                   manager : ''
  }
                  
   //this.loginId = JSON.parse(activatedRoute.snapshot.params["loginId"]);
  };

  ngOnInit(): void {
   
    this.service.getMangerByManagerId("admin").subscribe((result:any) => {this.manager = result;})
  }
  RegisterDriver(RegisterForm:any):void{

    
    this.driver.salary = 5000
    this.driver.driverBranch = this.manager.managerBranch;
    this.driver.manager = this.manager;
    this.driver.driverStatus = false;
    if(this.driver.vehicleType === "Tempo"){
      this.driver.vehicleCharges = 4000;
    }
    else {
      this.driver.vehicleCharges = 5000;
    }
    console.log(this.driver)
    this.service.registerDriver(this.driver).subscribe((result:any) => {console.log("Driver added!"); this.toastr.success('Registration successful', 'Success!!');});
    this.driver.vehicleId = '';
    this.driver.vehicleType = '';
    this.driver.driverName = '';
    this.driver.salary = '';
    this.driver.driverPhone = '';
  }

}
