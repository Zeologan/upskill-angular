import { Component } from '@angular/core';

@Component({
  selector: 'app-fitler',
  templateUrl: './fitler.component.html',
  styleUrls: ['./fitler.component.css']
})
export class FitlerComponent {
  search  = '';
  items = ['Angular','React', 'Vue'];
}
