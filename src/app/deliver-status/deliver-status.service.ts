import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DeliverStatusService {
  apiURL: string = 'https://private-e5b78a-sampledata4.apiary-mock.com/questions';

  constructor(private http: HttpClient ) { }

  getDeliveries(): Observable<any> {
    return this.http.get(this.apiURL, httpOptions);
  }
  
}
