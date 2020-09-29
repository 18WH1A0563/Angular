import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-otp-confirmation',
  templateUrl: './otp-confirmation.component.html',
  styles: [
  ]
})
export class OtpConfirmationComponent implements OnInit {

  public otp : any;
  public transactionId : any;
  public retriveData : any;
  public customer:any;
  constructor(private router : Router,private activatedRoute: ActivatedRoute,private service : ManagerService) { 
    
    //console.log(this.transactionId);
    
  }

  ngOnInit(): void {
    this.retriveData = localStorage.getItem('customer');
    this.customer = JSON.parse(this.retriveData);
    console.log(this.customer);
    this.service.generateOTP(this.customer.transactionId).subscribe((result:any) => {console.log(result); this.otp = result;});
  }

  validate():any{}

  async confirm(otpForm : any){
    if(otpForm.otp != this.otp){
      alert("OTP did not match!")
    }
    else{
      this.customer.otp = this.otp;
      await this.service.confirmCustomer(this.customer).subscribe((result:any)=>console.log(result));
      alert("You will be reached shortly by our manager!");
      this.router.navigate(['']);
    }
    
  }



}

