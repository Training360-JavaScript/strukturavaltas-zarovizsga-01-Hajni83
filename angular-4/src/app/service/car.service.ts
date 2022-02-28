import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {


  apiUrl:string=environment.apiUrl;
  constructor(
    private http:HttpClient
  ) { }

  getAll():Observable<Car[]>{
    return this.http.get<Car[]>(`${this.apiUrl}cars`);
  }

  get(id:number):Observable<Car>{
    return this.http.get<Car>(`${this.apiUrl}cars/${id}`);
  }

  create(Car:Car):void {
    this.http.post(`${this.apiUrl}cars`, Car);
  }

  update(Car:Car):Observable<Car>{
    return this.http.patch<Car>(`${this.apiUrl}cars/${Car.id}`,Car);
  }

  delete(Car:Car):void {
    this.http.delete(`${this.apiUrl}/cars/${Car.id}`);
  }
}
