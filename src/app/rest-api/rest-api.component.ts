import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.css']
})
export class RestApiComponent implements OnInit {
  constructor(private user:UserService){}

  users:any[] = [];
  ngOnInit(){
    this.user.getUser().subscribe(data => this.users = data)
  }
  
}
