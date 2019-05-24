import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovingImages';

images1: Object;
images2: Object;

public selectedImage1: number = Math.floor(Math.random() * 9);
public selectedImage2: number = Math.floor(Math.random() * 9);


constructor(private data: DataService) { }  

ngOnInit() {
  this.data.getImages(1).subscribe(data => {
    this.images1 = data
    this.selectImage1({}, this.images1["hits"][this.selectedImage1])    
    console.log(data)
  })
  this.data.getImages(2).subscribe(data => {
    this.images2 = data      
    this.selectImage2({}, this.images2["hits"][this.selectedImage2])
    console.log(data)
  })   
  
 }

 selectImage1(event, item) {     
    this.selectedImage1 = item.id;
    
  }
  selectImage2(event, item) {     
    this.selectedImage2 = item.id;
    
  }  

 }


