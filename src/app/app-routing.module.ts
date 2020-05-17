import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { RepoSearchComponent } from './components/repo-search/repo-search.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';


const routes: Routes = [
  { path: 'users', component: UserSearchComponent},
  { path: 'home', component: LandingPageComponent},
  { path: 'repos', component: RepoSearchComponent},  
  { path: '', redirectTo:"/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
