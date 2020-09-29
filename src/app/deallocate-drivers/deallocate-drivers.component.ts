import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import {ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-deallocate-drivers',
  templateUrl: './deallocate-drivers.component.html',
  styles: [
  ]
})
export class DeallocateDriversComponent implements OnInit {

  public managerBranch: any;
  public drivers : any;
  public manager : any;

  constructor(private service : ManagerService, private activatedRoute: ActivatedRoute, private toastr: ToastrService) {}
   

  ngOnInit(): void {
    this.manager = JSON.parse(localStorage.getItem('manager'));
    this.service.getAllDriversToDeallocate(this.manager.managerBranch).subscribe((result:any) => {this.drivers = result});
  }

  async deallocate(driver:any){
    console.log(driver);
    var j = this.drivers.indexOf(driver);
    console.log(j);
    this.drivers.splice(j,1);
    await this.service.changeDriverStatus(driver).subscribe((result:any) => {this.toastr.success("Deallocation successful", "Success")});
    
  }
}
