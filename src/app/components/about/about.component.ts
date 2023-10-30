import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  navs = [
    {
      name: "Home",
      url: "/",
      class: ""
    },
    {
      name: "About",
      url: "/about",
      class: "active"
    }
  ]
}
