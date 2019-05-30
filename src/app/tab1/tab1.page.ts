import { Component } from '@angular/core';

import { listing } from '../models/listing.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public listing: Array<listing> = [];

  constructor() {

    let lst1 = new listing();
    lst1.address = "Ranch Style";

    let lst2 = new listing();
    lst2.address = "Red Keep";

    let lst3 = new listing();
    lst3.address = "White Zigzag";

    let lst4 = new listing();
    lst4.address = "Sunset Castle";

    let lst5 = new listing();
    lst5.address = "Twilight Abode";

    let lst6 = new listing();
    lst6.address = "Suburban Retreat";

    this.listing.push(lst1);
    this.listing.push(lst2);
    this.listing.push(lst3);
    this.listing.push(lst4);
    this.listing.push(lst5);
    this.listing.push(lst6);


  }

}
