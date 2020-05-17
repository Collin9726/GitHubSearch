import { Component, OnInit } from '@angular/core';
import { UsernameInput } from 'src/app/models/UsernameInput/username-input';
import { Users } from 'src/app/models/User/users';
import { SearchUserService } from 'src/app/services/SearchUser/search-user.service';
import { UserRepos } from 'src/app/models/UserRepos/user-repos';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  faSearch=faSearch;

  searchedUser=new UsernameInput();
  searchedUser1=new UsernameInput();
  user:Users=new Users();
  userRepos: UserRepos=new UserRepos();
  //totalCount:number;

  submitUsername(){
    this.searchedUser1=this.searchedUser;
    this.userService.searchUser(this.searchedUser1.username);
    this.user=this.userService.user;
    //let repoNum=this.user.publicRepos;
    //let reposURL=this.user.reposUrl;
    //this.userService.searchRepos();
    this.userRepos=this.userService.userRepos;    
    //this.totalCount=this.userService.totalCount;
    this.searchedUser=new UsernameInput();
  }

  constructor(private userService: SearchUserService) { }

  ngOnInit(){
    
  }

}
