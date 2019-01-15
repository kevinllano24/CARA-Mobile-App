import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HttpService } from '../../services/http.service';

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})

  export class ReportPage {
    plateNo;
    accountID;
    model;
    color;
    type;
    poi;
    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private http: HttpService,
      public app: App) {
        this.accountID = this.navParams.get('accountid')
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad ReportPage');
    }
    doReport(){
      let params = {
        "plateNo" : this.plateNo,
        "accountID" : this.accountID,
        "color": this.color,
        "type": this.type,
        "model": this.model,
        "poi": this.model
      } 
      this.http.reportData(params).subscribe(
        (response) => {
          console.log(response);
          this.plateNo = '';
          this.color= '';
          this.model='';
          this.type = '';
          this.poi = '';
        },
        (error) => {
          console.log(error);
        })
    }

    logout(){
      //Api Token Logout
      const root = this.navCtrl.goToRoot;
    }

}
