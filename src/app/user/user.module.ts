import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    UserProfileComponent,
    UserListComponent
  ],
  imports: [
    UserRoutingModule,
    CommonModule
  ]
})
export class UserModule { }
