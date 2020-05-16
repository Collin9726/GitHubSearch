import { Injectable } from '@angular/core';
import { Users } from 'src/app/models/User/users';
import { HttpClient } from '@angular/common/http';
import {environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {
  users: Users[];
  user: Users;
  numOfRepos:number=5;
  totalCount:number;

  searchUser(username:string){

    interface ApiResponse1{
      total_count:any;
      items:any;      
    }

    interface ApiResponse2{
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

    // interface ApiResponse3{
    //   results:any[];
    // }

    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse1>(`${environment.userBase}${username}`).toPromise().then(response=>{
        
        //let popLength=this.searchedGif.searchGifURL.length;

        // for(let index=0; index<popLength; index++){
        //   this.searchedGif.searchGifURL.pop();
        // }

        let usersLength=this.users.length;
        for(let index=0;index<usersLength;index++){
          this.users.pop();
        }
        
        this.totalCount=response.total_count;

        for(let index=0; index<5; index++){

          this.user=new Users;

          let userUrl=response.items[index].url;
          let promise1= new Promise((resolve,reject)=>{
            this.http1.get<ApiResponse2>(`${userUrl}`).toPromise().then(response=>{
              this.user.profPic=response.avatar_url;
              this.user.username=response.login;
              this.user.profileLink=response.html_url;
              this.user.name=response.name;
              this.user.followers=response.followers;
              this.user.following=response.following;
              this.user.publicRepos=response.public_repos;
              this.user.joined=response.created_at;
              this.user.reposUrl=response.repos_url;

              for (let i=0; i<this.numOfRepos; i++){
                //let repos_url=response.repos_url;
                let promise2=new Promise ((resolve,reject)=>{
                  this.http2.get(`${this.user.reposUrl}`).toPromise().then(response=>{
                    //let arr:any[]=response[];
                    this.numOfRepos=response["length"];
                    this.user.repositoryNames.push(response[i].name);
                    this.user.repositoryLinks.push(response[i].html_url);
                    this.user.repositoryDescriptions.push(response[i].description);
                    this.user.repositoryForks.push(response[i].forks);
                    this.user.repositoryCreated.push(response[i].created_at);
                    this.user.repositoryLicenses.push(response[i].license.name);

                    resolve();
                  },
                  error=>{
                    console.log("Error ApiResponse2");       
                    reject(error);                  
                  })
                })
                //return promise2; 
              }             
              
              resolve();
            },
            error=>{
              console.log("Error ApiResponse2");       
              reject(error)
            })            
          })          
          //return promise1;
          this.users.push(this.user);
        }        
        
        resolve()
      },
      error=>{
        console.log("Error ApiResponse1");        

        reject(error)
      })
    })
    return promise;
  }

  constructor(private http: HttpClient, private http1: HttpClient, private http2: HttpClient) { 
    this.user=new Users();
  }
}
