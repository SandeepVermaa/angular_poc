import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetDataService } from '../Services/get-data.service';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    emailId: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]

  })

  userDetails:any;
  constructor(private fb: FormBuilder,
    private router: Router,
    private getDataService : GetDataService,
    private auth : AuthService) { }

  ngOnInit() {

  }
  onLogin() {
    if (this.loginForm.valid) {

        this.getDataService.getData(this.loginForm.value).subscribe(response=>{
          this.userDetails = response;
          console.log(response);
          localStorage.setItem("data",JSON.stringify(this.userDetails[0].id));
          localStorage.setItem("name",(this.userDetails[0].first_name));
          
          if((Object.keys(this.userDetails).length!=0))
          {
            this.auth.sendToken(this.userDetails[0].email)
            this.router.navigate(['/userpages/profile']);  
          }     
            

        })
    
  }
}
}
