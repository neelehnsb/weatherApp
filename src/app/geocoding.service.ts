import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  private apiKey = 'AIzaSyDbC38YKreOeJv3Dlf1XfL6EKMKomVKD14';

  constructor(private http: HttpClient) {}

  getLocationCoordinates(location: string): Observable<any> {
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${this.apiKey}`;
    return this.http.get(apiUrl);
  }
}
