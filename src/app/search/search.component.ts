import { Component } from '@angular/core';
import { OpencageGeocodingService } from '../opencage-geocoding.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  location: string = '';

  constructor(private opencageGeocodingService: OpencageGeocodingService, private router: Router) {}

  async searchLocation() {
    try {
      const geocodingResponse = await this.opencageGeocodingService.getGeocode(this.location);
      const { lat, lng } = geocodingResponse.results[0].geometry;
      this.router.navigate(['/weather'], { queryParams: { lat, lon: lng } });
    } catch (error) {
      console.error('Error processing geocoding response:', error);
    }
  }
}
