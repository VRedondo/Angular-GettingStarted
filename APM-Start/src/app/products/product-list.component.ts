import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  pageTitle: string = 'Product List';
  showImage: boolean = true;
  errorMessage: any;
  filteredProducts: IProduct[];
  _listFilter: string;
  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  products: IProduct[] = [];
  
  constructor(private _productService: ProductService) {
    this.listFilter = 'cart';
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe(
        products => {
          this.products = products
          this.filteredProducts = this.products;
        },
        error => this.errorMessage = <any>error
      )
    
  }

  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) => {
      return product.productName.toLowerCase().indexOf(filterBy) !== -1
    });
  }

  onRatingClick(message: string): void{
    this.pageTitle = `Product List ${message}`;
  }
}
