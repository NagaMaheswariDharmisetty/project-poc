import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class InfoService {
Url="https://jsonplaceholder.tyicode.com/posts";
  constructor(private http:HttpClient) { }
  getPosts(){
    return this.http.get(this.Url);
  }
}
