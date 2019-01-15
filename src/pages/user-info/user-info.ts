import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';

@IonicPage()
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfoPage {
  response;
  accountid;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpService) {
    this.accountid = {'accountid':this.navParams.get('accountid')}
    console.log(this.accountid);
    this.dogetinfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserInfoPage');
  }

  dogetinfo(){
    this.http.getInfo(this.accountid).subscribe(
      (response) => {
        this.response = response;
      },
      (error) => {
        console.log(error);
      }
    )

  }
}
