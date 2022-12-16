import { Component ,OnInit} from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.scss']
})
export class ViewAllProductComponent implements OnInit {
  productID!:any
  productlist!:Product[];
    constructor(private productservice:ProductService){}
    
    ngOnInit(): void {
       
      this.productservice.viewallproduct().subscribe((data)=>{
        console.log(data)
      
        this.productlist=data;
      })
    }
}
