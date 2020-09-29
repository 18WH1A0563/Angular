import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';

declare var jQuery : any;
@Component({
  selector: 'app-show-all-customers',
  templateUrl: './show-all-customers.component.html',
  styles: [
  ]
})
export class ShowAllCustomersComponent implements OnInit {

  public customers : any;
  public result : any;
  public temp : any;
  public manager : any;
  public message:any;
  public drivers : any;
  public id : any;
  public driver : any;

  constructor(private service : AdminService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getAllCustomersByAdminToAllocate().subscribe((result:any) => {this.customers = result;});
    this.service.getAllDriversToAllocate().subscribe((res:any)=>{this.drivers = res;});
    
  }

  showEditPopup(customer: any) {
    console.log(customer.managerId);
    this.temp = customer;
    jQuery('#allocate').modal('show');

  }

  onClickMe(id:any){
    this.temp.manager = this.manager;
    var i = this.customers.indexOf(this.temp);
    this.customers.splice(i,1);
    for (let index = 0; index < this.drivers.length; index++) {
      if (this.drivers[index].vehicleId == id) {
        var j = index;
        break;
        
      };      
    }
    this.driver = this.drivers[j];
    console.log(j);
    this.drivers.splice(j,1);
    this.service.allocate(this.driver, this.temp).subscribe((result:any) => console.log(result));
    this.toastr.success("Driver allocated!", "Success");
    this.id = '';
    
  }

  showRejectPopup(customer: any) {
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
