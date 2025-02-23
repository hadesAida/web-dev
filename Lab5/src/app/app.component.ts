import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './productlist/productlist.component';
import { ProductItem } from './productitem';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [ProductsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

  categories = ['All', 'Laptops', 'Laptop stands', 'Mouses', 'Keyboards', 'Mouse pads', 'Laptop bags'];
  
  
  selectedCategory: string = 'All';

  selectCategory(category: string){
    this.selectedCategory = category;
  }
  
  


  
}
