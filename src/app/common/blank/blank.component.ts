import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent {
  @Input() title: string = "";
  @Input() navs: any[] = [];  
}
