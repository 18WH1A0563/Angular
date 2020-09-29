import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import {ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

declare var jQuery : any;

@Component({
  selector: 'app-show-drivers',
  templateUrl: './show-drivers.component.html',
  styles: [
  ]
})
export class ShowDriversComponent implements OnInit {

  public drivers : any;
  public manager: any;
  public vehicleId:any;
  public driver : any;

  constructor(private service : ManagerService, private activatedRoute: ActivatedRoute, private toastr: ToastrService) {
    //this.managerBranch = JSON.parse(activatedRoute.snapshot.params["managerBranch"]);
   }

  ngOnInit(): void {
    this.manager = JSON.parse(localStorage.getItem('manager'));
    this.service.getAllDriversBranchwise(this.manager.managerBranch).subscribe((result:any) => {this.drivers = result;console.log(result)})
  }

  deleteEmp(driver: any) {
    
    this.driver = driver;
    jQuery('#delete').modal('show');
  }

  onClickMe(){
    if(this.driver.vehicleId == this.vehicleId){

      for (let index = 0; index < this.drivers.length; index++) {
        if (this.drivers[index].vehicleId == this.vehicleId) {
          var j = index;
          break;
          
        };      
      }
      console.log(j);
      this.drivers.splice(j,1);
      this.service.deleteDriver(this.driver).subscribe((result:any) => console.log(result));
      this.toastr.success("Driver deleted!", "Success");

    }
    else{
      this.toastr.error("No proper ID was selected!");
    }
    this.vehicleId = '';
    
    
  }
}
