import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userRole:any
  itemNumber:any;
  carts:any={}
    constructor(
      ) {
        
       }
  
    ngOnInit(): void {
     this.getRole()
    }
    getRole(){}
  

    getItems(){
      // environment.api_url= environment.base_url +"/online"
      // this.appService.getAll().subscribe((res:any)=>{
      //   console.log(res)
      //    this.carts=res;
      // this.itemNumber=this.carts.length;
      // return this.itemNumber?this.carts.length:null;
      // },(error: any)=>{console.log(error)})
    }
  
    onKeyUp(event:any){
       console.log(event);
      
      // environment.api_url= environment.base_url +"/catalog/search"
      // this.appService.getAllByParams(event).subscribe((res:any)=>{
      //   console.log(res)
      // })
    }
}
