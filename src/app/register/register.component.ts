import { Component,ViewChild, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {
  }
  @ViewChild("f") registerForm!: NgForm;

  onSubmit() {
    console.log(this.registerForm.value);
  }

  ngOnInit(): void {
  }
}



