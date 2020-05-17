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

    this.user=new Users ();

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
      this.http.get<ApiResponse>(`${environment.testBase}${username}`).toPromise().then(response=>{
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
        console.log("Error fetching user");       
        reject(error)
      })            
    })          
    return promise;
    
  }

  searchRepos(){
    let promise=new Promise ((resolve,reject)=>{
      this.http.get(`${this.user.reposUrl}`).toPromise().then(response=>{
        //let arr:any[]=response[];
        let numOfRepos=response["length"];
        for (let i=0; i<5; i++){
          this.user.repositoryNames.push(response[i].name);
          this.user.repositoryLinks.push(response[i].html_url);
          this.user.repositoryDescriptions.push(response[i].description);
          this.user.repositoryForks.push(response[i].forks);
          this.user.repositoryCreated.push(response[i].created_at);
          this.user.repositoryLicenses.push(response[i].license.name);
        }
  
        resolve();
      },
      error=>{
        console.log("Error fetching repos");       
        reject(error);                  
      })
    })
    return promise; 
  }

  constructor(private http: HttpClient) { 
    this.user=new Users();
  }
}

