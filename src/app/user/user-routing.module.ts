import { NgModule } from "@angular/core";
import { Routes, RouterModule, UrlSegment, UrlMatchResult } from "@angular/router";
import { applicationInjector } from "src/main";
import { AuthService } from "../auth.service";
import { UserListComponent } from "./user-list/user-list.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";



const routes: Routes = [
  {
    matcher: adminMatcher,
    component: UserListComponent
  },
  {
    path: 'user',
    component: UserProfileComponent
  },
  {
    path: '**',
    redirectTo: 'user'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }

function adminMatcher(url: UrlSegment[]): UrlMatchResult|null {

  const authService =  applicationInjector.get(AuthService);
  console.log(authService.config)
  console.log(url.length);
  console.log(url[0]);
  console.log(authService.isAdmin())
  if( authService.isAdmin() && (url.length == 1 && url[0].path === 'user')){
      return {
        consumed: url
      };
  }else{
      return null;
  }
}
