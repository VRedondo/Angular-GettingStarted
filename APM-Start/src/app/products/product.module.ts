import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { ProductRoutingModule } from './product-routing.module';
import { ProductEditComponent } from './product-edit.component';
import { ProductResolverService } from './product-resolver.service';


@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule,
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
  ],
  providers: [
    ProductService,
    ProductGuardService,
    ProductResolverService,
  ]
})
export class ProductModule { }
