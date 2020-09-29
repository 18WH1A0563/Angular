import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-all-records',
  templateUrl: './all-records.component.html',
  styles: [
  ]
})
export class AllRecordsComponent implements OnInit {
  public customers : any;

  constructor(private service : AdminService) { }

  ngOnInit(): void {
    this.service.getAllCustomers().subscribe((result:any) => {this.customers = result;});
  }

}
