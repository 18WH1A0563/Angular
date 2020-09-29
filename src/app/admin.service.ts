import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private isUserLogged:any;

  constructor(private httpClient : HttpClient) {
    this.isUserLogged = false;
   }

   setUserLoggedIn():void{
    this.isUserLogged = true;
  }

  setUserLoggedOut():void{
    this.isUserLogged = false;
  }

  getUserLogged(): any{
    return this.isUserLogged;
  }

  registerManager(manager: any){
    return this.httpClient.post('MovingMadeEasy/webapi/myresource/registerManager', manager);
  }

  registerDriver(driver: any){
    return this.httpClient.post('MovingMadeEasy/webapi/myresource/registerDriver', driver);
  }

  getMangerByManagerId(loginId : any){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/getMangerByManagerId/'+ loginId);
  }

  getAllManager(){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/getAllManagers');
  }

  getAllDrivers(){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/getAllDrivers');
  }

  getAllCustomers(){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/getAllCustomers');
  }

  getAllCustomersByAdminToAllocate(){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/getAllCustomersByAdminToAllocate');
  }

  getAllDriversToAllocate(){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/getAllDriversToAllocate');
  }
  
  addAds(ads:any, fileToUpload:File){
    console.log(ads, fileToUpload);
    const endpoint = 'MovingMadeEasy/webapi/myresource/uploadImage';
    const formData : FormData = new FormData();
    formData.append('Image',fileToUpload,fileToUpload.name);
    formData.append('title',ads.adsTitle);
    formData.append('description',ads.adsDesc);
    return this.httpClient.post(endpoint,formData);
   // return this.httpClient.post('MovingMadeEasy/webapi/myresource/addAds', ads);
  }

  deleteDriver(driver:any){
    return this.httpClient.post('MovingMadeEasy/webapi/myresource/deleteDriver' , driver);
  }

  deleteManager(manager:any){
    return this.httpClient.post('MovingMadeEasy/webapi/myresource/deleteManager',manager);
  }

  allocate(driver: any, customer : any){
    const formData : FormData = new FormData();
    formData.append('customer',JSON.stringify(customer));
    formData.append('driverstr',JSON.stringify(driver));
    
    console.log("Form data");
    console.log(formData);
    return this.httpClient.post('MovingMadeEasy/webapi/myresource/allocateByAdmin' ,formData);
  }

  rejectCustomer(customer:any, message:any){
    const formData : FormData = new FormData();
    formData.append('customer',customer.transactionId);
    formData.append('message',message);
    return this.httpClient.post('MovingMadeEasy/webapi/myresource/rejectCustomer' ,formData);
  }

}
