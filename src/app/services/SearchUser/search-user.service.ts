import { Injectable } from '@angular/core';
import { Users } from 'src/app/models/User/users';
import { HttpClient } from '@angular/common/http';
import {environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {
  //users: Users[];
  user: Users;
  //numOfRepos:number=5;
  //totalCount:number;

  searchUser(username:string){

    interface ApiResponse{
      login:string;
      html_url:string;
      repos_url:string;
      name:string;
      avatar_url:string;
      followers:number;
      following:number;
      public_repos:number;
      created_at:string;
    }

    let promise= new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(`${environment.userBase}${username}`).toPromise().then(response=>{
        this.user.profPic=response.avatar_url;
        this.user.username=response.login;
        this.user.profileLink=response.html_url;
        this.user.name=response.name;
        this.user.followers=response.followers;
        this.user.following=response.following;
        this.user.publicRepos=response.public_repos;
        this.user.joined=response.created_at;
        this.user.reposUrl=response.repos_url;                    
        
        resolve();
      },
      error=>{
        console.log("Error ApiResponse");       
        reject(error)
      })            
    })          
    return promise;
    
  }

  constructor(private http: HttpClient) { 
    this.user=new Users();
  }
}
