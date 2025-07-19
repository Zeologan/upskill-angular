import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  data:string = 'Hey Its hello From Parent'
  childMessage = "";
  receiverMessage(message:string){
    this.childMessage = message
  }
}
