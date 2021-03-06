import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { UsernameValidators } from "src/app/signup-form/username.validators";

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
form = new FormGroup({
  username : new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    UsernameValidators.cannotContainSpace
  ]),
  Password : new FormControl('',Validators.required)
});

get username() {

return this.form.get('username');
}
  

}
