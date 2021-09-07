import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

export class MinarService {
 
  
  urlW = "https://bitcoin-test-a0874-default-rtdb.firebaseio.com/wallets.json"
  urlT = "https://bitcoin-test-a0874-default-rtdb.firebaseio.com/transactions.json"
  urlTD = "https://bitcoin-test-a0874-default-rtdb.firebaseio.com/transactions"
  urlWP = "https://bitcoin-test-a0874-default-rtdb.firebaseio.com/wallets"

  constructor(private http: HttpClient) { }

 
  public getWallets():Observable<any> {
    return this.http.get(`${this.urlW}`)
  }


  public getTransactions():Observable<any> {
    return this.http.get(`${this.urlT}`)
  }


  public mineBTC(id:string,val):Observable<any> { 
    return this.http.patch(`${this.urlWP}/${id}.json`,{"btc":val})
  }

  public mineETH(id:string,val):Observable<any> {
    return this.http.patch(`${this.urlWP}/${id}.json`,{"eth":val})
  }


  public delete(id: string): Observable<any> {
    return this.http.delete(`${this.urlTD}/${id}.json`);
  }
}