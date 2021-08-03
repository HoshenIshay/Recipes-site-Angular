import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }
  CheckPassword(Name:string,Password:string){
    return( this.http.get<number>("https://localhost:44355/api/users/checkPassword?UserName="+Name+"&UserPassword="+Password));

  }
}
