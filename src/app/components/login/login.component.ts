import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
contactForm!:FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.createContactForm();
  }
  createContactForm(){
    this.contactForm = this.formBuilder.group({
      userName: [''],  
      password: [''],
     
    });
  }
  onSubmit(){
    console.log('Your form data : ', this.contactForm.value );
}
  ngOnInit(): void {
    
  }
  

}
