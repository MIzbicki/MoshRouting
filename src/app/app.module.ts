import { MyFollowersService } from './services/my-followers.service';
import { MyFollowersComponent } from './my-followers/my-followers.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFollowersComponent,
    NavBarComponent,
    NotFoundComponent,
    HomeComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'followers',
        component: MyFollowersComponent
      },
      {
        path: 'profile/:username',
        component: MyProfileComponent
      },
      /*{
        path: 'posts',
        component: PostComponent
      },*/
      {
        path: '**', //handel all others URLs
        component: NotFoundComponent
      },
    ])
  ],
  providers: [
    MyFollowersService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
