import { Component, OnInit } from '@angular/core';
import { UsernameInput } from 'src/app/models/UsernameInput/username-input';
import { Users } from 'src/app/models/User/users';
import { SearchUserService } from 'src/app/services/SearchUser/search-user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  searchedUser=new UsernameInput();
  searchedUser1=new UsernameInput();
  user:Users=new Users();
  //totalCount:number;

  submitUsername(){
    this.searchedUser1=this.searchedUser;
    this.userService.searchUser(this.searchedUser1.username);
    this.user=this.userService.user;
    //this.totalCount=this.userService.totalCount;
    this.searchedUser=new UsernameInput();
  }

  constructor(private userService: SearchUserService) { }

  ngOnInit(){
  }

}
