import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/shared/services/app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  dataForm:FormGroup
  constructor(private fb: FormBuilder,private appService: AppService) { }

  ngOnInit(): void {
   
    this.dataForm=this.fb.group({
      startingAt:'',
      endingAt:''
    })
  }
   submit(){
    console.log(this.dataForm.value);
    environment.api_url= environment.base_url +"/booking/saveOrUpdate"
    this.appService.addData(this.dataForm.value).subscribe((data:any) => {
      console.log("response :"+data);
    })

   }

}
