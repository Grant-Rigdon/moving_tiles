import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovingTiles';

imagesTop: Object;
imagesBottom: Object;

constructor(private data: DataService) { }  

ngOnInit() {
  this.data.getImagesTop().subscribe(data => {
    this.imagesTop = data    
    console.log(data)
  })
  this.data.getImagesBottom().subscribe(data => {
    this.imagesBottom = data    
    console.log(data)
  })
}

}
