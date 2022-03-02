import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpDataStorageService {

  constructor(private ht: HttpClient) { }

  // getdata(){
  //   return this.ht.get("http://localhost:3000/user");
  // }

  get(id: any){
    return this.ht.get(`http://localhost:3000/user/${id}`);
  }
}
