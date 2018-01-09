import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductGuardService } from './product-guard.service';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductResolverService } from './product-resolver.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent, data : { pageTitle: 'Product List' } },
      { 
        path: 'products/add', 
        component: ProductEditComponent,
        data: {
          pageTitle: 'Add Product',
        }
      }, { 
        path: 'products/:id', 
        canActivate: [ ProductGuardService ], 
        component: ProductDetailComponent, 
        data: {
          pageTitle: 'Product Detail'
        },
        resolve: {
          product: ProductResolverService
        } 
      }, { 
        path: 'products/:id/edit', 
        component: ProductEditComponent,
        data: {
          pageTitle: 'Product Edit: '
        },
        resolve: {
          product: ProductResolverService
        } 
      }
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }
