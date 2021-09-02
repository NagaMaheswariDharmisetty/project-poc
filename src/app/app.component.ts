import { Component } from '@angular/core';
import{ InfoService} from "./shares/service/info.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
constructor(private user:InfoService){
  this.user.getData().subscribe(data=>{
    console.log(data)
  })
}
  ngOnInit(){
    // this.postData.getPosts().subscribe((result: any)=>{
    //   console.warn("result",result)
    // })
  }
}
