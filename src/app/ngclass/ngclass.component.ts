import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent {
  selectedIndex = -1;

  selectItem(index:number){
    this.selectedIndex = index;
  }
}
