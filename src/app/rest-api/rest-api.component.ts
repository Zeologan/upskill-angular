import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.css']
})
export class RestApiComponent implements OnInit {
  constructor(private userService: UserService) { }
  loading = false
  users: any[] = [];
  ngOnInit() {
    this.loading = true
    this.userService.getUser().subscribe(data => {
      this.loading = false
      this.users = data
    })
  }

}
