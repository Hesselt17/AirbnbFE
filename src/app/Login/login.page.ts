import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { NavController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string = "";
  public password: string = "";

  constructor(
    private httpClient : HttpClient,
    private navCtrl : NavController,
    private alertC : AlertController
  ) { }

  ngOnInit() {
  }

  Login(){
    const authReq = {
      email: this.email,
      password: this.password
    };
    this.httpClient.post("http://localhost:3000/api/auth", authReq) //need to express path in api
    .subscribe(
      (response : any) => {
        const userID = response.id;
        localStorage.setItem("user_id", userID);
        this.navCtrl.navigateForward("tabs/tab1", {
          queryParams: {
            user_id : userID
          }
        });
      },
      err => {
        alert("Failed to login");
      });
  }
  
  navToReg(){
    this.navCtrl.navigateBack("");
  }

  // Submit(){
  //   console.log("Submitting to the server..");
  //   console.log(this.user);
  //   this.httpClient.post("http://localhost:3000/api/users", this.user) //this.user was old json object
  //   .subscribe (
  //     (response : any) => { //(response: any)
  //       console.log(response);
  //       this.navCtrl.navigateForward("/tabs/tab1", {
  //         queryParams: {
  //           userId: response.id
  //         }
  //       });
  //       //this.navCtrl.navigateForward("yup", {queryParams: {userId:response.id});
  //     },
  //     async (err) => {
  //       console.log(err);
  //       const alert = await this.alertC.create({
  //         message: "YOU stupid"
  //       });
  //       await alert.present();
  //     }
  //   );
  // }
}
