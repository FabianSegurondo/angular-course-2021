import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class VacunadosService {
  baseUrl = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/vaccinated.json`);
  }

  public listVacunados(): Observable<any> {
    return this.http.get(`${this.baseUrl}/vaccinated.json`);
  }

  public postVacunados(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/vaccinated.json`, body);
  }

  public patchVacunados(id: string, body: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/vaccinated/${id}.json`, body);
  }

  public deleteVacunados(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/vaccinated/${id}.json`);
  }
}