import { Component } from '@angular/core';

import { listing } from '../models/listing.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public listings: Array<listing> = [];

  constructor() {

    let lst1 = new listing();
    lst1.address = "1600 Pennsylvania Ave.";

    let lst2 = new listing();
    lst1.address = "Reunion Tower";

    this.listings.push(lst1);
    this.listings.push(lst2);


  }

}
