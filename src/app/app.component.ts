import { Component } from '@angular/core';

declare var placeHolder: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(): void {
    new placeHolder();
  } 

  title = 'mySummerProject';
}
