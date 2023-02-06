import { MyFollowersService } from './services/my-followers.service';
import { MyFollowersComponent } from './my-followers/my-followers.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFollowersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MyFollowersService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
