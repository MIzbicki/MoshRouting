import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  user: string | null = "";

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        let username = params.get('username');
        console.log(username);
        this.user = username;

        //we use it to cache e.g. username and than send request it to server
        //server.get/post ...
      }
    );
  }

}
