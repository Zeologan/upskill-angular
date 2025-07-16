import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
    message = 'Hello its Parent Data'

    handleNotificaiton(e:string){
      alert('Received form Child:'+ e);
    }
}
