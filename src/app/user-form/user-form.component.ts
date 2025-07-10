import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  constructor(private fb:FormBuilder){}
  userForm = this.fb.group({
    username : ['',Validators.required],
    password: ['',[Validators.required, Validators.minLength(6)]]
  })

  onSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value)
    }
  }
}
