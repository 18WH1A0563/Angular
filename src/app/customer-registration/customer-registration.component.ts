import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import {ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';

declare function validateForm():any;
declare function blockDates():any;

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styles: [
  ]
})
export class CustomerRegistrationComponent implements OnInit {

  public customer:any;
  public customer1:any;
  public x : any;
 
  constructor(private service : ManagerService,  private activatedRoute: ActivatedRoute, private router: Router) { 
    this.customer = { transactionId:'', bill:'', custName:'', custPhone:'',
                      date:'', destinationArea:'',destinationState:'', requirements:'',
                      residentArea:'',residentState:'',vehicleType:'',email:'',otp:'',
                      manager : { loginId: '', managerBranch:'', managerId:'', managerName:'',
                                managerPhone:'',managerSalary:'', password:''}
                    }
  };

  ngOnInit(): void { 
    blockDates();
   }  

  loginUser(){  }

  async validateUser(loginForm : any){

    this.x = validateForm();
    if(this.x){
      this.customer.transactionId = 0;
      this.customer.otp = 0;
      this.customer.manager = null;
      this.customer.bill = 0;    
      await this.service.registerCustomer(this.customer).subscribe((result)=> { this.customer1 = result;
        localStorage.setItem('customer', JSON.stringify(this.customer1));
        this.router.navigate(['app-customer-registration/app-bill']);//,JSON.stringify(this.customer1.transactionId)]);    
      });    
    }     
  }
}