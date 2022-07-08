import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  db:any={
    1000 : {"acno":1000, "username": "Ram", "password":1000},
    1001 : {"acno":1001, "username": "Sree", "password":1001},
    1002 : {"acno":1002, "username": "Hari", "password":1002},
  }

  constructor() { }

  login(acno:any,pswd:any){
    let db = this.db
    if(acno in db){
      if(pswd == db[acno]["password"]){
        return true
      }
      else{
        alert("incorrect Password")
        return false
      }
    }
    else{
      alert("User Doesnot Exist")
      return false
    }
  }

  register(username:any,acno:any,password:any){

    let db = this.db

    if(acno in db){
      return false
    }
    else{
      db[acno]={
        acno,
        username,
        password
      }
      console.log(db);
      
      return true
    }

  }










}
