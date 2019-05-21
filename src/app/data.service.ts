import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get('https://pixabay.com/api/?key=12532498-22795aba748ce0f4e58c508e2&colors=grayscale&orientation=horizontal&image_type=photo&per_page=18&safesearch=true')
  }
  
}
