import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class OpencageGeocodingService {
  private apiKey = '9fdc6b16903347b9a59d94a739cf29ac';

  constructor() {}

  async getGeocode(location: string): Promise<any> {
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=${this.apiKey}`;
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching geocoding data:', error);
      throw error;
    }
  }
}
