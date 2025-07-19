import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  
  products = Array.from({ length: 50}, (_, i) => `Product ${i+1}`);
  page  = 1;
  pageSize = 10;

  get paginatedProducts(){
    const start  = (this.page - 1) * this.pageSize;
    return this.products.slice(start, start+this.pageSize)
  }
  
  nextPage(){
    if(this.page * this.pageSize < this.products.length) this.page++;
  }

  prevPage(){
    if(this.page > 1) this.page--;
  }
}
