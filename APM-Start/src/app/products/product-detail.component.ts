import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string;
  product: IProduct;
  errorMessage: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.pageTitle = this.route.snapshot.data['pageTitle'];
    this.getProduct();
  }

  getProduct(): void {
    this.product = this.route.snapshot.data['product'];
  }
}
