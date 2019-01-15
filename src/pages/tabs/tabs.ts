import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  accounttype;
  accountid;

  reportRoot = 'ReportPage'
  accountsRoot = 'AccountsPage'
  adviewreports = 'AdviewReportsPage'
  userinfoRoot = 'UserInfoPage'


  constructor(public navCtrl: NavController,
    private navpar:NavParams
    ) {
      this.accounttype = this.navpar.get('accounttype');
      console.log(this.accounttype);  
    }

}
