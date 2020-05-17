import { Component, OnInit } from '@angular/core';
import { RepoNameInput } from 'src/app/models/RepoNameInput/repo-name-input';
import { Repo } from 'src/app/models/Repo/repo';
import { ReposTotalCount } from '../../models/ReposTotalCount/repos-total-count';
import { SearchRepoService } from 'src/app/services/SearchRepo/search-repo.service';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {

  searchedRepo=new RepoNameInput();
  searchedRepo1=new RepoNameInput();
  repo:Repo=new Repo();
  repos:Repo[]=[];
  totalCount: ReposTotalCount=new ReposTotalCount();
  //userRepos: UserRepos=new UserRepos();
  //totalCount:number;

  submitRepoName(){
    this.searchedRepo1=this.searchedRepo;
    this.repoService.searchRepo(this.searchedRepo1.repoName);
    this.repos=this.repoService.repos;
    this.totalCount=this.repoService.totalRepos;
    //let repoNum=this.user.publicRepos;
    //let reposURL=this.user.reposUrl;
    //this.repoService.searchRepos();
    //this.userRepos=this.userService.userRepos;    
    //this.totalCount=this.userService.totalCount;
    this.searchedRepo=new RepoNameInput();
  }

  constructor(private repoService: SearchRepoService) { }
  

  ngOnInit() {
  }

}
