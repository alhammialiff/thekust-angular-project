import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'conFusion'; // This prop will be accessible in our template
}

// 'templateUrl' : Can also provide inline template thru using backquotes
// Eg. 
// @Component({
//  ...
//  template: `<h1>{{title}}</h1>`
//  style: `color: blue;`
// })