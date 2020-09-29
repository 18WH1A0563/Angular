import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';


declare var jQuery : any;

@Component({
  selector: 'app-show-all-drivers',
  templateUrl: './show-all-drivers.component.html',
  styles: [
  ]
})
export class ShowAllDriversComponent implements OnInit {
  public drivers : any;
  public vehicleId:any;
  public driver : any;

  constructor(private service : AdminService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getAllDrivers().subscribe((result:any) => {this.drivers = result; console.log(result)});    
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
