import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class NoVacunadosService {
  baseUrl = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/unvaccinated.json`);
  }

  public listNoVacunados(): Observable<any> {
    return this.http.get(`${this.baseUrl}/unvaccinated.json`);
  }

  public postNoVacunados(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/unvaccinated.json`, body);
  }

  public patchNoVacunados(id: string, body: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/unvaccinated/${id}.json`, body);
  }

  public deleteNoVacunados(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/unvaccinated/${id}.json`);
  }
}