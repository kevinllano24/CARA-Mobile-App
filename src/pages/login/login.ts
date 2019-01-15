import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';
import { RegisterPage } from '../register/register';
import {LoadingController} from 'ionic-angular';
import { loginInterface } from '../interface/login.interface';
import { TabsPage } from '../tabs/tabs';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username;
  password;
  session;
  loader:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpSvc: HttpService,public loadingcontroller:LoadingController) {

  } 

  presentloading(){
    this.loader = this.loadingcontroller.create({
      content :"Authenticating.."

    });
    this.loader.present(); 
  }
  doLogin(){
    this.presentloading();
    let params = {
      "username" : this.username,
      "password" : this.password
    } 
    this.httpSvc.loginProcess(params).subscribe(
      (response : loginInterface) => { 
        localStorage.setItem('token', response.token);
        localStorage.setItem('accountid', response.accountid);
        localStorage.setItem('username', response.username);
        this.loader.dismiss();
        this.navCtrl.setRoot(TabsPage,{'accounttype': response.accounttype});
        console.log(response);    
      }, 
      (error) => {
        console.log(error); 
        this.loader.dismiss();

      }  
    );
  }
  registerpage(){
    this.navCtrl.push(RegisterPage);
  }


}


  
