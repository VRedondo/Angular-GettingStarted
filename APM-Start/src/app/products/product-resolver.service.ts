import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import { IProduct } from './product';
import { ProductService } from './product.service';


@Injectable()
export class ProductResolverService implements Resolve<IProduct>{

  constructor(private productService: ProductService, private location: Location) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
    let id = route.params['id'];

    if (isNaN(id)) {
      this.location.back();
      return Observable.of(null);
    }
    return this.productService.getProduct(+id)
      .map(product => {
        if (product) {
          return product;
        }
        console.log(`Product was not found ${id}`);
        this.location.back();
        return null;
      })
      .catch(error => {
        console.log(`Retrieval error: ${error}`);
        this.location.back();
        return Observable.of(null);
      });
  }
}
