import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { ManagerService } from '../manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styles: [
  ]
})
export class BillComponent implements OnInit {
  public transactionId:any;
  public output: any;
  public bill:any;
  public retriveData : any;
  public customer:any;
  public ppk = 12;
  constructor(private router : Router,private service : ManagerService,private activatedRoute: ActivatedRoute, private toastr: ToastrService) {
    
   }

  ngOnInit(): void {
    this.retriveData = localStorage.getItem('customer');
    this.customer = JSON.parse(this.retriveData);
    console.log(this.customer);
    this.service.getCustomer(this.customer.transactionId).subscribe((result:any) => {this.output = result;
      this.output[0] = this.output[0] | 0;
      this.customer.bill = this.output[1].total;
    });
   
    
    //console.log(this.customer)
  }

  confirm():any{
    
    localStorage.setItem('customer', JSON.stringify(this.customer));
    this.router.navigate(['app-customer-registration/app-bill/app-otp-confirmation']);

  }

}
