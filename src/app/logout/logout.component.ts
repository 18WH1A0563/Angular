import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styles: [
  ]
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private service : ManagerService) { }

  ngOnInit(): void {
  }

  validateUser(logoutForm : any) {
   
      this.service.setUserLoggedOut();
      this.router.navigate(['app-home-page']);
  } 

}
