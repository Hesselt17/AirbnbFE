import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listing } from '../models';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  private lstID : number;
  public address : string;
  public currentListing : listing;

  public listings : Array<listing> = [];

  constructor(
    private activatedRoute: ActivatedRoute
  ) { 

    let lst1 = new listing();
    lst1.address = "Ranch Style";
    lst1.image = "https://www.quickenloans.com/blog/wp-content/uploads/2016/11/gray-house-with-green-lawn-e1478724365131.jpg";
    lst1.id = 0; 

    let lst2 = new listing();
    lst2.address = "Red Keep";
    lst2.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_WUk78MLV2gwhx0v_IX_ScrsjRFC_NF69SfPQ52gIvwA4OzNY";
    lst2.id = 1; 

    let lst3 = new listing();
    lst3.address = "White Zigzag";
    lst3.image = "http://www.trentwilliamsconstruction.com/images/parade-of-homes-2007-twcm-02.jpg";
    lst3.id = 2; 

    this.listings.push(lst1);
    this.listings.push(lst2);
    this.listings.push(lst3);


  }

  ngOnInit() {

    //The function data gets called once the query 
    //let receivedQueryParams = function(data: any){
    // console.log(data);


    let arrow = (data: any) => {
      this.address = data.params.address;
      this.lstID = data.params.lstID;

    //Find property by ID
    this.listings.forEach(
      (lst: listing) => {
        if (lst.id == this.lstID){
          this.currentListing = lst;
        }
      }
    )
    };


    this.activatedRoute.queryParamMap.subscribe(
      //receivedQueryParams
      arrow
    );
  }

}
