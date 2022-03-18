import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { prizes } from '../model/prizes';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  getPrize():Observable<any>{
    return this.http.get("http://localhost:4500/prizes");
  }
}
