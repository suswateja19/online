import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranstractionService {

  baseUrl = 'http://localhost:8085/obs/api/transtraction';

  constructor(private http:HttpClient) { }

    getTranstractionList(): Observable<any> {
      return this.http.get(`${this.baseUrl}`);
    }
}
