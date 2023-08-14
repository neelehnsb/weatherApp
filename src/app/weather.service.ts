import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '38bfc6c50eca63adb5791fae939f79dd';

  constructor(private http: HttpClient) {}

  getCurrentWeather(lat: number, lon: number): Observable<any> {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    return this.http.get(apiUrl);
  }

  getForecast(lat: number, lon: number): Observable<any> {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    return this.http.get(apiUrl);
  }
}
