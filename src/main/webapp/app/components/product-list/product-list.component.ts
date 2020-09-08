import { Component, OnInit } from '@angular/core';
import { Product } from 'app/shared/model/product.model';
import { ProductService } from 'app/entities/product/product.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'jhi-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  allProducts: any;
  isLoaded!: Promise<boolean>;
  DataIsLoaded: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.query().subscribe((res: HttpResponse<Product[]>) => {
      this.bindData(res.body);
    });
  }

  private bindData(data: Product[] | null) {
    this.allProducts = data;
    this.isLoaded = Promise.resolve(true);
  }
}
