import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseUrl = 'http://localhost:8085/obs/api/transactions';

  constructor(
    private http:HttpClient) { }


    getTransactionList(): Observable<any>{

      return this.http.get(`${this.baseUrl}`);

    }

    getTransaction(id: number): Observable<any>{
      return this.http.get(`${this.baseUrl}/${id}`);
    }


  }
