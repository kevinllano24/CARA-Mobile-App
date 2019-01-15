import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  username;
  password;
  fullname;
  address;
  gender;
  email;
  contactno;
  vehicleplateno;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpService) {
  }
  

  doRegister(){
    let params = {
      "username" : this.username,
      "password" : this.password,
      "email"    : this.email,
      "fullname" : this.fullname,
      "address"  : this.address,
      "gender"   : this.gender,
      "cnumber"  : this.contactno,
      "vehicleplateno"  : this.vehicleplateno
    } 
    this.http.postData(params).subscribe(
      (response) => {
        console.log(response);
          this.navCtrl.setRoot(LoginPage);
      },
      (error) => {
        console.log(error);
      })
  }

}
