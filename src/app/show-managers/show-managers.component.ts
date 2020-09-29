import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';


declare var jQuery : any;


@Component({
  selector: 'app-show-managers',
  templateUrl: './show-managers.component.html',
  styles: [
  ]
})
export class ShowManagersComponent implements OnInit {

  public managers : any;
  public loginId:any;
  public manager : any;

  constructor(private service : AdminService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getAllManager().subscribe((result:any) => {this.managers = result;})
  }

  deleteManager(manager: any) {
    
    this.manager = manager;
    jQuery('#delete').modal('show');
  }

  onClickMe(){
    if(this.manager.loginId == this.loginId){
      var j = this.managers.indexOf(this.manager);
      console.log(j);
      this.managers.splice(j,1);
      this.service.deleteManager(this.manager).subscribe((result:any) => {console.log(result);
        this.toastr.success("Manager deleted!", "Success");
      });
    }
    else{
      this.toastr.error("No proper ID was selected!");
    }
    this.loginId = '';
    
    
  }

}
