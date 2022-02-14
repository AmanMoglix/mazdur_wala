import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  addData(data: any){
    return this.httpClient.post(environment.api_url,data,{headers: environment.bearer_header})
  }
}
