import { literalMap } from '@angular/compiler';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Params} from '@angular/router';
import { Category } from 'src/app/site-layout/category';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.scss']
})
export class ViewProductByCategoryComponent implements OnInit {

  productlist!:Product[];
  
  categoryID!:any;
  
  constructor(private activatedRoute:ActivatedRoute,private productservice:ProductService ){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.categoryID = params.get('id');
      console.log(this.categoryID)
    })
  
      this.productservice.searchCategoryProduct(this.categoryID).subscribe((categoryID)=>{
        console.log(categoryID)
        this.productlist =categoryID;
 
        console.log(this.productlist);
    })
  }
}