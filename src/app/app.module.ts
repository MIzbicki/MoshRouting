import { MyFollowersService } from './services/my-followers.service';
import { MyFollowersComponent } from './my-followers/my-followers.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFollowersComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    MyFollowersService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
