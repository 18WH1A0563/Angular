import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private isUserLogged:any;
  public result : any;
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

  getManagerById(loginId : any , password : any){
    this.result = loginId + ' ' + password;
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/getManagerById/'+ this.result);
  }

  getMangerByManagerId(loginId : any){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/getMangerByManagerId/'+ loginId);
  }

  getAllDriversBranchwise(managerBranch : any){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/getAllDriversBranchwise/'+ managerBranch);
  }

  getAllDriversToAllocate(branch: any){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/getAllDriversToAllocate/'+ branch);
  }

  getAllDriversToDeallocate(branch:any){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/getAllDriversToDeallocate/'+ branch);
  }

  getCustomer(transactionId : any){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/getCustomer/' + transactionId);
  }

  getCustomerToAllocate(transactionId : any){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/getCustomerToAllocate/' + transactionId);
  }

  registerDriver(driver: any){
    return this.httpClient.post('MovingMadeEasy/webapi/myresource/registerDriver', driver);
  }

  registerCustomer(customer: any){
    return this.httpClient.post('MovingMadeEasy/webapi/myresource/registerCustomer', customer);
  }
  seeAllRequests(managerBranch: any){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/seeAllRequests/' + managerBranch);
  }

  generateBill(customer:any){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/generateBill/' + customer);
  }

  allocate(driver: any, customer : any, manager:any){
    const formData : FormData = new FormData();
    formData.append('customer',JSON.stringify(customer));
    formData.append('driverstr',JSON.stringify(driver));
    formData.append('managerstr', JSON.stringify(manager));
    console.log("Form data");
    console.log(formData);
    return this.httpClient.post('MovingMadeEasy/webapi/myresource/allocate' ,formData);
  }

  generateOTP(transactionId:any){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/generateOTP/' + transactionId);
  }

  confirmCustomer( customer:any){
    //this.result = String(transactionId) + ' ' + String(otp);
    return this.httpClient.post('MovingMadeEasy/webapi/myresource/confirmCustomer', customer);
  }

  rejectCustomer(customer:any, message:any){
    const formData : FormData = new FormData();
    formData.append('customer',customer.transactionId);
    formData.append('message',message);
    return this.httpClient.post('MovingMadeEasy/webapi/myresource/rejectCustomer' ,formData);
  }

  deleteDriver(driver:any){
    return this.httpClient.post('MovingMadeEasy/webapi/myresource/deleteDriver' , driver);
  }

  changeDriverStatus(driver: any){
    return this.httpClient.post('MovingMadeEasy/webapi/myresource/changeDriverStatus' , driver);
  }

  updateCustomer(customer: any){
    return this.httpClient.post('MovingMadeEasy/webapi/myresource/updateCustomer' , customer);
  }

  updateDriver(driver:any){
    return this.httpClient.post('MovingMadeEasy/webapi/myresource/updateDriver', driver);
  }


}
