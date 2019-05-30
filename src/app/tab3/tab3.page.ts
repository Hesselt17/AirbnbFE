import { Component } from '@angular/core';

import { listing } from "../models/index";
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  public listing: Array<listing> = [];

  constructor(
    private navCtrl: NavController
  ) {

    let lst1 = new listing();
    lst1.address = "Ranch Style";
    lst1.image = "https://www.quickenloans.com/blog/wp-content/uploads/2016/11/gray-house-with-green-lawn-e1478724365131.jpg";
    lst1.id = 0; 

    let lst2 = new listing();
    lst2.address = "Red Keep";
    lst2.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_WUk78MLV2gwhx0v_IX_ScrsjRFC_NF69SfPQ52gIvwA4OzNY";
    lst2.id = 0; 

    let lst3 = new listing();
    lst3.address = "White Zigzag";
    lst3.image = "http://www.trentwilliamsconstruction.com/images/parade-of-homes-2007-twcm-02.jpg";
    lst3.id = 0; 

  }

  navDetails(){
    this.navCtrl.navigateForward("details")
  }

}
