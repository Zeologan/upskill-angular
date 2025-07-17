import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
<<<<<<< HEAD
  @Input() message!:string;

  @Output() messageEvent = new EventEmitter<string>();
  sendMessage(){
    this.messageEvent.emit('hello world from child!')
=======
  @Input() item = '';
  @Output() notify= new EventEmitter<string>();

  sendBack(){
    this.notify.emit('Hello Parent')
>>>>>>> 08e5178295db544457d55370eb96dd6d354a7a42
  }
}
