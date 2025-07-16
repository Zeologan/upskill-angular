import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() item = '';
  @Output() notify= new EventEmitter<string>();

  sendBack(){
    this.notify.emit('Hello Parent')
  }
}
