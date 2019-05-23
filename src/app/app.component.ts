import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovingImages';

images: Object;
public ImageItems: any = new Array;
public selectedImage: number = Math.floor(Math.random() * 18);

constructor(private data: DataService) { }  

ngOnInit() {
  this.data.getImages().subscribe(data => {
    this.images = data
    this.selectImage({}, this.images.hits[this.selectedImage])  
    console.log(data)
  })
     
  
 }

 selectImage(event, item) {     
    this.selectedImage = item.id;
    
  } 

 }


