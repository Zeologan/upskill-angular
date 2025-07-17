import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
<<<<<<< HEAD
  data:string = 'Hey Its hello From Parent'
  childMessage = "";
  receiverMessage(message:string){
    this.childMessage = message
  }
=======
    message = 'Hello its Parent Data'

    handleNotificaiton(e:string){
      alert('Received form Child:'+ e);
    }
>>>>>>> 08e5178295db544457d55370eb96dd6d354a7a42
}
