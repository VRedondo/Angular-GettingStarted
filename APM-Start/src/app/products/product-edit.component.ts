import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { IProduct } from './product';
import { MessageService } from '../messages/message.service';

@Component({
  selector: 'pm-product-edit',
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit {
  pageTitle: string = '';
  product: IProduct;
  errorMessage: any;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router,
    private messageService: MessageService) { }

  ngOnInit() {
    let product = this.route.snapshot.data['product'];
    this.pageTitle = this.route.snapshot.data['pageTitle'];
    if (product) {
      this.setProduct(product);
    } else {
      this.addProduct();
    }
  }

  setProduct(product: IProduct): void {
      this.product = product;
      this.pageTitle = `${this.pageTitle} ${product.productName}`;
  }

  addProduct(): void {
    this.product = this.productService.initializeProduct();
  }

  saveProduct(): void{
    this.productService.saveProduct(this.product).subscribe(
      () => {
        this.onSaveComplete(`${this.product.productName} was saved`);
        this.router.navigate(['/products']);
      },
      error => this.errorMessage = error
    );
  }

  deleteProduct(): void{
    let { id } = this.product;
    if (id === 0 ) {
      this.router.navigate(['/products']);
    } else {
      if (confirm(`Really delete the product: ${this.product.productName}?`)) {
        this.productService.deleteProduct(this.product.id)
          .subscribe(
            () => { 
              this.onSaveComplete(`${this.product.productName} was deleted`)
              this.router.navigate(['/products']);
            },
            error => this.errorMessage = error
          );
      }
    }
  }

  onSaveComplete(message?: string): void {
    if (message) {
        this.messageService.addMessage(message);
    }
    // Navigate back to the product list
  }
}
