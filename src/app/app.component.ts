import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovingTiles';

images: Object;


constructor(private data: DataService) { }  

ngOnInit() {
  this.data.getImages().subscribe(data => {
    this.images = data    
    console.log(data)
  })
 }

}
