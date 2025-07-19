import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
    form:FormGroup;
    constructor(private fb:FormBuilder){
      this.form = this.fb.group({
        email: ['',[Validators.required, Validators.email]]
      })
    }

    onSubmit(){
      if(this.form.valid){
        console.log('form submitten',this.form.value)
      }else{
        console.log('Invalid Form')
      }
    }
}
