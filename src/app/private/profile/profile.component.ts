import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UpdateDataService } from '../services/update-data.service';
import { GetDataService } from 'src/app/Services/get-data.service';
import { DataService } from 'src/app/Services/data.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  

  profileForm = this.fb.group({
    first_name :["", Validators.required],
    last_name :["", Validators.required],
    email : ["", [Validators.required,Validators.email]],
    phone_no : ["",Validators.required,],
    address : ["",Validators.required],
    medical_history : [""],
    password :["", Validators.required],
  })
  userDetails;
 
  

  constructor(private fb: FormBuilder,
    private router: Router,
    private updateService: UpdateDataService,
    private getDataService: GetDataService,
    private location:Location,
    private head: DataService) { }

  ngOnInit() {
    this.head.changeMessage("Profile");
    this.getDataService.getProfile(localStorage.getItem('data')).subscribe(response=>{
      this.userDetails=response;
      console.log(response);
      this.profileForm.controls['first_name'].setValue(this.userDetails.first_name);
      this.profileForm.controls['last_name'].setValue(this.userDetails.last_name);
      this.profileForm.controls['email'].setValue(this.userDetails.email);
      this.profileForm.controls['phone_no'].setValue(this.userDetails.phone_no);
      this.profileForm.controls['address'].setValue(this.userDetails.address);
      this.profileForm.controls['medical_history'].setValue(this.userDetails.medical_history);
      this.profileForm.controls['password'].setValue(this.userDetails.password);
    })

  }
  onUpdate(){
    console.log("aaya");
    if(this.profileForm.valid){
      this.updateService.updateData(localStorage.getItem('data'), this.profileForm.value).subscribe(updatedResponse => {
        location.reload();
        localStorage.setItem('name',this.profileForm.value.first_name)

      });
    }
  }
     

      
}

