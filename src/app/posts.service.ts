import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _http:HttpClient) { }

  getAllPosts(){
    return this._http.get("http://localhost:3000/posts");
  }

  getSinglePost(){
    return this._http.get("http://localhost:3000/posts");
  }
}
