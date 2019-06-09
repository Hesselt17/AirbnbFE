import { Injectable } from '@angular/core';
import { listing } from '../models';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  public listings: Array<listing> = [];
  public property: listing = new listing();

  constructor(
    private httpClient : HttpClient
  ) {}


  getAllProperties(cb: Function){

    // this.listings = [];

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

    this.httpClient.get("http://localhost:3000/api/property")
      .subscribe(
        (response : any /*or user*/) => {
          console.log(response); //Access the express res.json({id:4, name:""...})
            //response.name;
          return cb(null,response);
        },
        (err) => {
          alert("failed to getAllProperties");
          return cb(err,null);
        }
      ); 
  }

// findLstByID (cb: Function){
  
// }


  /*
//Example of integrating http in service folder - submit now has params
  Submit(auth: any, cb: Function){
    console.log("Submitting to the server..");
    console.log(this.user);
    this.httpClient.post("http://localhost:3000/api/users", this.user) //this.user was old json object
    .subscribe (
      (response) => { //(response: any)
        console.log(response);                //response only comes back in top
        this.navCtrl.navigateForward("yup");
        //this.navCtrl.navigateForward("yup", {queryParams: {userId:response.id});
      },
      async (err) => {
        console.log(err);
        const alert = await this.alertC.create({
          message: "YOU stupid"
        });
        await alert.present();
      }
    );
  }

  var userService: UserService;

  userService.submit({
    email:"",
    password: ""
  }, (err, result) => {
    if (err) return ...
  })
  */
}
