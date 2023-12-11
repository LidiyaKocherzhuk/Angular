import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

import {ICar, ICreateCarData, IUpdateCarData} from "../interfaces";
import {carUrls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private trigger = new BehaviorSubject<boolean>(null);
  private updateCar = new BehaviorSubject<ICar>(null);

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(carUrls.cars.base);
  }

  create(carData: ICreateCarData): Observable<ICar> {
    return this.httpClient.post<ICar>(carUrls.cars.base, carData);
  }

  update(id: number, updateCarData: IUpdateCarData): Observable<ICar> {
    return this.httpClient.put<ICar>(carUrls.cars.byId(id), updateCarData);
  }

  delete(id: number,): Observable<void> {
    return this.httpClient.delete<void>(carUrls.cars.byId(id));
  }

  setTrigger(): void {
    this.trigger.next(!this.trigger.value);
  }

  getTrigger(): Observable<boolean> {
    return this.trigger.asObservable();
  }
  setUpdateCar(updateCar: ICar): void {
    this.updateCar.next(updateCar);
  }

  getUpdateCar(): Observable<ICar> {
    return this.updateCar.asObservable();
  }

}

