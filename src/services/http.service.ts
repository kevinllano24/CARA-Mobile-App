import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {
    resolve:any;
    constructor(private http: HttpClient){} 


    getData() {
        return this.http.get("http://localhost/caramanager/api/users/users", this.getHttpOptions());
    }
    getInfo(params){
        return this.http.post("http://localhost/caramanager/api/users/usersinfo",params);
    }
 
    postData(params) {
        return this.http.post("http://localhost/caramanager/api/users/register", params,this.getHttpOptions());
    }
    reportData(params){
        return this.http.post("http://localhost/caramanager/api/users/report", params);
    }

    loginProcess(params) {
        return this.http.post("http://localhost/caramanager/api/users/login", params);
    }

    getreport(){
        return this.http.get("http://localhost/caramanager/api/users/report", this.getHttpOptions());
    }

    getHttpOptions(){
        return {
            headers : new HttpHeaders({
                'content-type' : 'application/json',
                'Authorization' : localStorage.getItem('token')
            })
        }
    }
}