import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private httpclient: HttpClient) { }
   
  getData(parameters){
    
    return this.httpclient.get("http://localhost:3000/posts",{
      params: parameters
    })
  }

  getProfile(parameters){
    
    return this.httpclient.get("http://localhost:3000/posts/" + parameters)
    }

    getUpcoming(){
    
      return this.httpclient.get("http://localhost:3000/upcoming");
    }
    getPast(){
      return this.httpclient.get("http://localhost:3000/past");
    }

    getfaqs(){
    
      return this.httpclient.get("http://localhost:3000/FAQ");
    }
}

  

