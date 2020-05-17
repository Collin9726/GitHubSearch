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
      items:any;      
    }

    let promise= new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(`${environment.repoBase}${input}`).toPromise().then(response=>{
        this.totalRepos.totalRepos=response.total_count;
        //let loopLength=response.items.length;
        for(let item of response.items){
          this.repo=new Repo();
          this.repo.repoName=item.name;
          this.repo.owner=item.owner.login;
          this.repo.ownerLink=item.owner.html_url;
          this.repo.repoLink=item.html_url;
          this.repo.description=item.description;
          this.repo.forks=item.forks;
          this.repo.language=item.language;
          this.repo.createdAt=item.created_at;
          this.repo.lastUpdated=item.updated_at;
          if (item.license!==null){
            this.repo.license=item.license.name;
          }
          else{
            this.repo.license='None';
          }

          this.repos.push(this.repo);
        }                    
        
        resolve();
        console.log(this.repos)
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
