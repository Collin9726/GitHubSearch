import { Injectable } from '@angular/core';
import { Users } from 'src/app/models/User/users';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { UserRepos } from '../../models/UserRepos/user-repos';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {  
  user: Users;
  userRepos: UserRepos;
  reposURL:string='';
  repoNum:number=0;  

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
        this.user.isName=true;
        this.user.profPic=response.avatar_url;
        this.user.username=response.login;
        this.user.profileLink=response.html_url;
        if (response.name!==null){
          this.user.name=response.name;
        } 
        else{
          this.user.isName=false;
          this.user.name='';
        }       
        this.user.followers=response.followers;
        this.user.following=response.following;
        this.user.publicRepos=response.public_repos;
        this.user.joined=response.created_at;
        this.user.reposUrl=response.repos_url;
        this.reposURL=response.repos_url;
        this.repoNum=response.public_repos;
        this.searchRepos();                    
        
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

    let arrLength=this.userRepos.repositoryNames.length;

    interface ApiRepos{
      name:string;
      html_url:string;
      description:string;
      forks:number;
      created_at:string;
      license:any;
    }

    for(let i=0; i<arrLength; i++){
      this.userRepos.repositoryNames.pop();
      this.userRepos.repositoryLinks.pop();
      this.userRepos.repositoryDescriptions.pop();
      this.userRepos.repositoryForks.pop();
      this.userRepos.repositoryCreated.pop();
      this.userRepos.repositoryLicenses.pop();
    }

    for(let i=0;i<this.repoNum;i++){
      let promise=new Promise ((resolve,reject)=>{
        this.http.get<ApiRepos>(`${this.reposURL}`).toPromise().then(response=>{
          
          this.userRepos.repositoryNames.push(response[i]['name']);
          this.userRepos.repositoryLinks.push(response[i]['html_url']);
          this.userRepos.repositoryDescriptions.push(response[i]['description']);
          this.userRepos.repositoryForks.push(response[i]['forks']);
          this.userRepos.repositoryCreated.push(response[i]['created_at']);
          if(response[i]['license']===null)
          {
            this.userRepos.repositoryLicenses.push("None");
          }
          else{
            this.userRepos.repositoryLicenses.push(response[i]['license']['name']);
          }          
    
          resolve();
        },
        error=>{
          console.log("Error fetching repos");       
          reject(error);                  
        })
      })
      
    } 
  }

  constructor(private http: HttpClient) { 
    this.user=new Users();
    this.userRepos=new UserRepos();
  }
}

