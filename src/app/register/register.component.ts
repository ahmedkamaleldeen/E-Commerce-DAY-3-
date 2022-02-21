import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:FormGroup;
  constructor() {
    this.form=new FormGroup({
      Name:new FormControl('',Validators.required),
      UserName:new FormControl('',[Validators.required,Validators.pattern("/\s/g")]),
      Email:new FormControl('',[Validators.email,Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]),
      Password:new FormControl('',[Validators.minLength(8),Validators.maxLength(20),Validators.required]),
      RepeatPassword:new FormControl('')
    });
   }

  ngOnInit(): void {
  }
//   public noWhitespaceValidator(control: FormControl) {
//     const isWhitespace = (control.value || '').trim().length === 0;
//     const isValid = !isWhitespace;
//     return isValid ? null : { 'whitespace': true };
// }
get formControl(){
  return this.form.controls;
}

submit(){
  console.log(this.form);
}

}
