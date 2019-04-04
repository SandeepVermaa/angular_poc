import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {classes} from '../classes/classes';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private httpclient: HttpClient) { }
  postData(data: classes){
    return this.httpclient.post('http://localhost:3000/posts',data)
  }
}
