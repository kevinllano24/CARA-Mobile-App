import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReportPage } from '../report/report';
import { HttpService } from '../../services/http.service';

@IonicPage()
@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html',
})
export class AccountsPage {
  username:any;
  response:any;
  accountid:any;

  constructor(public navCtrl: NavController,  private http: HttpService, private navpar:NavParams) {
    this.doGet();
    this.username = this.navpar.get('username');
    this.accountid = localStorage.getItem('accountid');
  
  }

  doGet(){
    this.http.getData().subscribe(
      (response) => {
        this.response = response;
      },
      (error) => {
        this.navCtrl.setRoot(ReportPage,{'accountid':this.accountid});
      }
    )
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountsPage');
  }

}
