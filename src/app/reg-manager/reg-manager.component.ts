import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reg-manager',
  templateUrl: './reg-manager.component.html',
  styles: [
  ]
})
export class RegManagerComponent implements OnInit {

  public manager : any;
  constructor(private service : AdminService, private toastr : ToastrService) {
    
    this.manager = {loginId:'', password:'', managerBranch: '', managerName: '', 
                    managerSalary : '' ,managerPhone: ''
  }
}

  ngOnInit(): void {
  }

  async RegisterManager(registerForm:any){
    await this.service.registerManager(this.manager).subscribe((result:any)=>{console.log("Manger added!");
      this.toastr.success("Manager registered!","Success");
    });
    this.manager.loginId='';
    this.manager.password='';
    this.manager.managerBranch='';
    this.manager.managerName='';
    this.manager.managerSalary='';
    this.manager.managerPhone='';
    
  }

}
