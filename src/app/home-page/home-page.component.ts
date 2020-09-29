import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';

declare function sendReply(vari: any):any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})



export class HomePageComponent implements OnInit {
  url = 'assets/javascript/chat.js';
  loadAPI: Promise<any>;
  public vari : any;

  constructor() {
   }

  ngOnInit(): void {
    this.loadAPI = new Promise(resolve => {
      this.loadScript();
    });           
    
  }

  public loadScript() {
    let node = document.createElement('script');
    node.src = this.url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
}
 
  public trial():any{
    sendReply(this.vari);
    

  }

}
