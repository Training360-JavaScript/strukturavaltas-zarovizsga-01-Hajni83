import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Construction } from '../model/construction';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  apiUrl:string=environment.apiUrl;

  constructor(
    private http:HttpClient
  ) { }

  getAll():Observable<Construction[]>{
    return this.http.get<Construction[]>(`${this.apiUrl}constructions`);
  }

  get(id:number):Observable<Construction>{
    return this.http.get<Construction>(`${this.apiUrl}constructions/${id}`);
  }

  create(construction:Construction):void {
    this.http.post(`${this.apiUrl}constructions`, construction);
  }

  update(construction:Construction):Observable<Construction>{
    return this.http.patch<Construction>(`${this.apiUrl}constructions/${construction.id}`,construction);
  }

  delete(construction:Construction):void {
    this.http.delete(`${this.apiUrl}/constructions/${construction.id}`);
  }
}
