import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
 
  constructor(public active:ActivatedRoute,private user:RegisterService,private route:Router) { }
  myForm: FormGroup;
  UserCode:string="";
  UserName:string="";
  UserAddress:string="";
  UserMail:string="";
  UserPassword:string="";

ngOnInit(): void {
    this.myForm=new FormGroup({
      "id":new FormControl("",Validators.compose([Validators.required,Validators.minLength(9)])),
      "name": new FormControl("", Validators.required),
      "address": new FormControl("", Validators.required),
      "mail": new FormControl("", Validators.compose([Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])),
      "pass": new FormControl("", Validators.compose([Validators.required, Validators.minLength(4),Validators.maxLength(10)]))
      
    });
    this.active.params.subscribe(succ => {

      this.UserName = succ.id;
      console.log(this.UserName)
  },unsucc=>{console.log("error")})}
  addUser(){
  
  return(this.user.addUser(new User(this.UserCode,this.UserName,this.UserAddress,this.UserMail,this.UserPassword)).subscribe(succ=>
    { localStorage.setItem("user",this.UserCode.toString());
    Swal.fire(
      'Added!',
       'ההרשמה בוצעה בהצלחה',
       'success',
       
     )
      this.route.navigate(["allRecipes"]);
   },unsucc=>alert("אוופס התגלתה בעיה")));

  }
  


   
}
