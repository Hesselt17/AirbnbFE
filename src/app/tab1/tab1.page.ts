import { Component } from '@angular/core';

import { listing } from '../models/index';

import { NavController } from '@ionic/angular';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public listings: Array<listing> = [];

  constructor(
    private navCtrl : NavController,
    private lstService: PropertyService, 
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

    // let lst4 = new listing();
    // lst4.address = "Sunset Castle";
    // lst4.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzounCPzcrndcLkEwr9uQdxPABsgMPiXid4r8ITyEd0mYHKUd";
    // lst4.id = 3;

    // let lst5 = new listing();
    // lst5.address = "Twilight Abode";
    // lst5.image = "https://i.pinimg.com/originals/f4/98/c2/f498c2becb7840e40b272eb4ade26b33.jpg";
    // lst5.id = 4;

    // let lst6 = new listing();
    // lst6.address = "Suburban Retreat";
    // lst6.image = "https://www.brickunderground.com/sites/default/files/styles/blog_primary_image/public/blog/images/110718_dallasmain.jpg";
    // lst6.id = 5;

    // this.listings.push(lst1);
    // this.listings.push(lst2);
    // this.listings.push(lst3);
    // this.listings.push(lst4);
    // this.listings.push(lst5);
    // this.listings.push(lst6);

    //Method call from service takes care of ^ construction
    //console.log(this.lstService);

    const listingCallback = (err, Plistings) => {
      if (err) {
        alert(err.error.message);
        return;
      }
      console.log(Plistings);
      this.listings = Plistings;
    };

    this.lstService.getAllProperties(listingCallback);
    //this.listings = this.lstService.listings;


  }

  navDetails(lst : listing){
    const propertyID = lst.id;
    localStorage.setItem("property_id", String(propertyID));
    this.navCtrl.navigateForward("details", {
      queryParams: {
        q: "ionic",
        address: lst.address,
        lstID : lst.id
      }
    });
  }

}
