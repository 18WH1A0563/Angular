import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styles: [
  ]
})
export class AdvertisementComponent implements OnInit {

  
  imageUrl : string;
  fileToUpload : File =null;
  reader:FileReader;
  constructor(private toastr: ToastrService, private service: AdminService) {
    
    this.imageUrl ="/assets/images/packers.png";
   }

  ngOnInit(): void {
  }

  handleFileInput(file : FileList){
    this.fileToUpload = file.item(0);
    this.reader = new FileReader();
    this.reader.readAsDataURL(this.fileToUpload);
    this.reader.onload=(event:any)=>{
      this.imageUrl=event.target.result;
    };
  }

  async addAds(addForm:any){
    
    await this.service.addAds(addForm, this.fileToUpload).subscribe((res:any)=> {
        this.imageUrl = "/assets/images/packers.png"
        this.toastr.success("Advertisement added!");
      
    });
    

  }

}
