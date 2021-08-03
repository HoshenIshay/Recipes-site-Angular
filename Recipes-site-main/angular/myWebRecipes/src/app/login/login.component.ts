import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { LoginService } from '../login.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user:LoginService,public route:Router) { }
  
  UserName:string="";
  UserPassword:string="";
   x:number;
   CheckPassword () {
   
    this.user.CheckPassword(this.UserName,this.UserPassword).subscribe(succ=>{
      
      if(succ==2)
     Swal.fire({
        title: 'Wrong Password',
        icon: 'error'
      });
    //  alert("סיסמא שגויה");
     else if(succ==0){
       this.route.navigate(["register",this.UserName]);
      console.log(succ)}
     else{
        this.x=succ;
        localStorage.setItem("user",this.x.toString());
     
      this.route.navigate(["allRecipes"]);}}
      
      ,
      unsucc=>console.log("error"));
   

  }
  ngOnInit(): void {
  }

}
