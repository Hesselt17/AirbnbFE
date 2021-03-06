import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listing } from '../models';
import { PropertyService } from '../services/property.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { booking } from '../models/booking';
import { User } from '../models/user.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public property: listing = new listing();
  public booking: booking = new booking();
  public user : User = new User();
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private lstService : PropertyService,
    private navCtrl : NavController,
    private httpC : HttpClient
  ) { 

    // let lst1 = new listing();
    // lst1.address = "Ranch Style";
    // lst1.image = "https://www.quickenloans.com/blog/wp-content/uploads/2016/11/gray-house-with-green-lawn-e1478724365131.jpg";
    // lst1.id = 0; 

    // let lst2 = new listing();
    // lst2.address = "Red Keep";
    // lst2.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_WUk78MLV2gwhx0v_IX_ScrsjRFC_NF69SfPQ52gIvwA4OzNY";
    // lst2.id = 1; 

    // let lst3 = new listing();
    // lst3.address = "White Zigzag";
    // lst3.image = "http://www.trentwilliamsconstruction.com/images/parade-of-homes-2007-twcm-02.jpg";
    // lst3.id = 2; 

    // this.listings.push(lst1);
    // this.listings.push(lst2);
    // this.listings.push(lst3);

    const userID = localStorage.getItem("user_id");
    console.log("User ID: ", userID);
    this.user.ID = Number(userID);

    const propertyID = localStorage.getItem("property_id");
    console.log("Property ID: ", propertyID);

    if (propertyID) {
      this.httpC.get("http://localhost:3000/api/property/" + propertyID)
        .subscribe(
          (response : any /*or user*/) => {
            console.log(response); //Access the express res.json({id:4, name:""...})
            //response.name;
            this.property.id = response.id;
            this.property.name = response.name;
            this.property.address = response.address;
            this.property.price = response.price;
            this.property.imageUrl = response.imageUrl;
            this.property.location = response.location;
            this.property.description = response.description;
          }
        ); 
    }
    else{

    }


  }

  navToExplore(){
    this.navCtrl.navigateBack("tabs/tab1");
  }

  bookNow(){
    this.booking.propertyID = this.property.id;
    this.booking.userID = this.user.ID;

    this.httpC.post("http://localhost:3000/api/property/" + this.property.id + "/booking", this.booking) //need to express path in api
    .subscribe(
      (response : any) => {
        console.log(response);
        alert ("Booking successful");
      },
      err => {
        const errorMess= err['error'];
        console.log(err);
          alert("Failed to Book");
      });
      console.log(this.booking);
  }

  ngOnInit() {

    //The function data gets called once the query 
    //let receivedQueryParams = function(data: any){
    // console.log(data);


    // let arrow = (data: any) => {
    //   //console.log(data);
    //   console.log(data.get("lstID")); //or userID
    //   this.address = data.params.address;
    //   this.lstID = data.params.lstID;

    // this.currentListing = this.lstService.findLstByID(this.lstID);
    // if (this.currentListing == null){
    //   alert("Property Not Found!")
    //   this.navCtrl.navigateBack("tab1");
    // }
    // };


    // this.activatedRoute.queryParamMap.subscribe(   //callback of type param map
    //   //receivedQueryParams
    //   arrow
    // );
  }

}
