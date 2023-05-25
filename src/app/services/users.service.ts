import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIUrl } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }

  getServicesUsers(){
    return new Promise((resolve, reject) => {
      this.http.get( APIUrl + 'users/domicilio').toPromise().then(data =>{
        resolve(data);          
      }).catch(error =>{
        reject(error);
      })
    })
  }
}
