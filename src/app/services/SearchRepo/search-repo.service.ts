import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Repo } from 'src/app/models/Repo/repo';
import { ReposTotalCount } from 'src/app/models/ReposTotalCount/repos-total-count';

@Injectable({
  providedIn: 'root'
})
export class SearchRepoService {

  repo:Repo;
  repos:Repo[]=[];
  totalRepos:ReposTotalCount;

  searchRepo(input:string){

    let arrLength=this.repos.length;
    for (let index=0; index<arrLength; index++){
      this.repos.pop();
    }

    interface ApiResponse{
      total_count:number;
      items:any[];      
    }

    let promise= new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(`${environment.repoBase}${input}`).toPromise().then(response=>{
        this.totalRepos.totalRepos=response.total_count;
        let loopLength=response.items.length;
        for(let i=0; i<loopLength;i++){
          this.repo=new Repo();
          this.repo.repoName=response.items[i].name;
          this.repo.owner=response.items[i].owner.login;
          this.repo.ownerLink=response.items[i].owner.html_url;
          this.repo.repoLink=response.items[i].html_url;
          this.repo.description=response.items[i].description;
          this.repo.forks=response.items[i].forks;
          this.repo.language=response.items[i].language;
          this.repo.createdAt=response.items[i].created_at;
          this.repo.lastUpdated=response.items[i].updated_at;
          this.repo.license=response.items[i].license.name;

          this.repos.push(this.repo);
        }                    
        
        resolve();
      },
      error=>{
        console.log("Error fetching user");       
        reject(error)
      })            
    })          
    return promise;

  }

  constructor(private http: HttpClient) { 
    this.repo=new Repo();
    this.totalRepos=new ReposTotalCount();
  }
}
