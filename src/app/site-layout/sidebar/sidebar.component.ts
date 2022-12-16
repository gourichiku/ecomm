import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/products/product';
import { ProductService } from 'src/app/products/product.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  categorylist!: Category[];
  searchCategory!: any;
  

  constructor(
    private productservice: ProductService,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productservice.getCategory(this.searchCategory).subscribe((data) => {
      this.categorylist = data;
    });

    // this.activatedroute.paramMap.subscribe(params=>{
    //   this.productID= params.get('id');
    //   console.log(this.productID);

    //   this.productservice.viewproduct(this.productID).subscribe(data=>{
    //     this.productlist=data;
    //     console.log(this.productlist);
        
    //   })
  
}
}