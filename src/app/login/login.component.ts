import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  acno=""
  pswd=""
  uname=""


  constructor(private router:Router, private ds:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
   //userdefined function



  //two way
  login(){
    var acno = this.acno 
    var pswd = this.pswd

    const result = this.ds.login(acno,pswd)
    if(result){
      alert("Login Successfull")
        this.router.navigateByUrl('dashboard')
    }
  

  }

  register(){
    var uname = this.uname
    var acno = this.acno 
    var pswd = this.pswd

    const result = this.ds.register(uname,acno,pswd)
    if(result){
      alert("Register Successfully...click sign in to login")
      this.router.navigateByUrl('login')
    }
    else{
      alert("Already Existing User....Please Login")
    }
  }
  
}
