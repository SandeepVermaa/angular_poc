import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateDataService {


  constructor(private http: HttpClient) { }

  updateData(id,par){
    return this.http.put('http://localhost:3000/posts/'+id,par)
  };
}
