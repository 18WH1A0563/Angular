import { Component, OnInit , Input} from '@angular/core';
import { Router} from '@angular/router';
import { ManagerService } from '../manager.service';
import {ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manager-homepage',
  templateUrl: './manager-homepage.component.html',
  styles: [
  ]
})
export class ManagerHomepageComponent implements OnInit {

  public manager : any;
  public loginId : any;
  
  constructor(private router: Router, private service : ManagerService, private activatedRoute: ActivatedRoute, private toastr: ToastrService) {
    //this.loginId = JSON.parse(activatedRoute.snapshot.params["loginId"]);
  }  

  ngOnInit(): void {
   
   this.manager = JSON.parse(localStorage.getItem('manager'));
   localStorage.setItem('manager', JSON.stringify(this.manager));
  }

  loginUser():void{ }

  addDriver():void{
    this.router.navigate(['app-manager-homepage/app-reg-driver']);//,JSON.stringify(this.loginId)]);     
  }

  getAllDriversBranchwise():void{
    this.router.navigate(['app-manager-homepage/app-show-drivers']);//,JSON.stringify(this.manager.managerBranch)]);     

  }

  seeAllRequests():void{
    this.router.navigate(['app-manager-homepage/app-requests']);//,JSON.stringify(this.manager.managerBranch)]);     
  }

  changeDriverStatus():void{
    this.router.navigate(['app-manager-homepage/app-deallocate-drivers']);//,JSON.stringify(this.manager.managerBranch)]);     

  }

  logout():void{
    this.service.setUserLoggedOut();
      this.router.navigate(['']);
  }
  
}
