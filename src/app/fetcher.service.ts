import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FetcherService {
  url="https://test-3c7e8-default-rtdb.firebaseio.com/"
  constructor(private http: HttpClient) { }

  public getAllWallets():Observable<any>{
    return this.http.get(`${this.url}wallets.json`)
  }

  public getAllTrans():Observable<any>{
    return this.http.get(`${this.url}transactions.json`)
  }

  public delete(id: string): Observable<any>{
    return this.http.delete(
      `${this.url}transactions/${id}.json`);
  }

  public mineBTC(id:string,val):Observable<any>{
    return this.http.patch(`${this.url}wallets/${id}.json`,{"btc":val})
  }

  public mineETH(id:string,val):Observable<any>{
    return this.http.patch(`${this.url}wallets/${id}.json`,{"eth":val})
  }
}