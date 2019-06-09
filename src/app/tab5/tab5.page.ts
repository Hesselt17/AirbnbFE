import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  public user: User = new User();

  constructor(
    private activatedRoute : ActivatedRoute,
    private httpC : HttpClient
  ) { 

    const userID = localStorage.getItem("user_id");
    console.log("PROFILE USER ID: ", userID);

    if (userID) {
      this.httpC.get("http://localhost:3000/api/users/" + userID)
        .subscribe(
          (response : any /*or user*/) => {
            console.log(response); //Access the express res.json({id:4, name:""...})
            //response.name;
            this.user.ID = response.id;
            this.user.name = response.name;
            this.user.email = response.email;
          }
        ); 
    } 
    else {
      
    }

  }

  ngOnInit() {
    // this.activatedRoute.queryParamMap.subscribe(
    //   (parameters : ParamMap) => {
    //     console.log(parameters);
    //     console.log(parameters.get("user_id"));

    //     const USER_ID = parameters.get("user_id");

    //     this.httpC.get("http://localhost:3000/api/users/" + USER_ID)
    //     .subscribe(
    //       (response : any /*or user*/) => {
    //         console.log(response); //Access the express res.json({id:4, name:""...})
    //         //response.name;
    //         this.user.ID = response.id;
    //         this.user.name = response.name;
    //         this.user.email = response.email;
    //       }
    //     )
    //     ;
        //this.httpC.get("http://localhost:3000/api/users/" + USER_ID);
        //this.httpC.get("http://localhost:3000/api/users/${userId}");

        //Express - app.get("/api/users/:id") - if there is a http get request on ^^
  //     }
  //   )
  }

}
