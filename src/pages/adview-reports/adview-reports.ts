import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';
import { UserInfoPage } from '../user-info/user-info';


@IonicPage()
@Component({
  selector: 'page-adview-reports',
  templateUrl: 'adview-reports.html',
})
export class AdviewReportsPage {
  response:any;
  accountid:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpService) {
    this.doGet();
    this.accountid = localStorage.getItem('accountid');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdviewReportsPage');
  }

  doGet(){
    this.http.getreport().subscribe(
      (response) => {
        this.response = response;
      },
      (error) => {
        this.navCtrl.setRoot(UserInfoPage,{'accountid':this.accountid});
      }
    )
  }
}
