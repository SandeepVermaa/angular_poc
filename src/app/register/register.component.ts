import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostDataService } from '../Services/post-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  registerForm = this.fb.group({
    first_name :["", Validators.required],
    last_name : ["",Validators.required],
    email : ["", [Validators.required,Validators.email]],
    phone_no : ["",Validators.required,],
    address : ["",Validators.required],
    medical_history : [""],
    password: ["",Validators.required],
    confirmpassword : ["",Validators.required ]
    
  })
  

  constructor(private fb: FormBuilder,
    private router: Router,
    private postDataService : PostDataService) { }

  ngOnInit() {
  }
  onRegister(){
    
    if (this.registerForm.valid ){
      this.postDataService.postData(this.registerForm.value).subscribe();
      
      this.router.navigate(['login']);
        }
  }
}
