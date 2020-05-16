import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitLibComponent } from './components/git-lib/git-lib.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { RepoSearchComponent } from './components/repo-search/repo-search.component';

@NgModule({
  declarations: [
    AppComponent,
    GitLibComponent,
    UserSearchComponent,
    RepoSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
