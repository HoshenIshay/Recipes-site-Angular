import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { User } from 'src/models/User';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(public http:HttpClient) {  }
  
  addUser(New:User){
    return (this.http.post<string>("https://localhost:44355/api/users/addUser",New));

  }
  GetAllUsers(){
    return (this.http.get<User[]>("https://localhost:44355/api/users/GetAllUsers"))
  }
}
