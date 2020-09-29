import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import {ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

declare var jQuery : any;
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styles: [
  ]
})
export class RequestsComponent implements OnInit {
  public customers : any;
  public managerBranch: any;
  public drivers: any;
  public did:any;
  public id : any;
  public temp : any;
  public manager : any;
  public message:any;
  public driver : any;

  constructor(private router: Router,private service : ManagerService, private activatedRoute: ActivatedRoute, private toastr: ToastrService) {  
    this.driver = {};
  }

  ngOnInit(): void {
    this.manager = JSON.parse(localStorage.getItem('manager'));
    this.service.seeAllRequests(this.manager.managerBranch).subscribe((result:any) => {this.customers = result;})
    this.service.getAllDriversToAllocate(this.manager.managerBranch).subscribe((result:any) => {this.drivers = result});
  }

  showEditPopup(customer: any) {
    console.log("Hello");
    this.temp = customer;

    jQuery('#allocate').modal('show');
  }

  onClickMe(id:any){
    console.log("Customer data");
    console.log(this.temp);
    console.log("Manager data");
    console.log(this.manager);
    this.temp.manager = this.manager;
    var i = this.customers.indexOf(this.temp);
    this.customers.splice(i,1);
    for (let index = 0; index < this.drivers.length; index++) {
      if (this.drivers[index].vehicleId == id) {
        var j = index;
        break;
        
      };      
    }
    
    this.driver =this.drivers[j];
    this.driver.driverStatus = true;
    console.log("Driver data");
    console.log(this.driver);
    console.log(j);
    this.drivers.splice(j,1);
    //this.temp.manager = this.manager;
        
    this.toastr.success("Driver allocated!", "Success");
    this.service.allocate(this.driver, this.temp, this.manager).subscribe((result:any) => console.log(result));
    this.id = '';
    
  }

  showRejectPopup(customer: any) {
    console.log("Hello");
    this.temp = customer;
    jQuery('#reject').modal('show');
  }

  onClickMeReject(){
    console.log(this.message);
    var i = this.customers.indexOf(this.temp);
    this.customers.splice(i,1);
    this.toastr.success("Customer request rejected!", "Success");
    this.service.rejectCustomer(this.temp, this.message).subscribe((res:any)=>{console.log("Done");
    this.message = '';
    });

  }

}
