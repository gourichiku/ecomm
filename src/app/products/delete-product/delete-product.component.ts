import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit{
  productID:any=[];
  productlist:any=[];
 
 constructor(private productservice:ProductService,private activatedroute:ActivatedRoute){}

 ngOnInit(): void {
     this.activatedroute.paramMap.subscribe(params=>{
        this.productID=params.get('id')
        console.log(this.productID)
     }) 
    
}
// delete(){
//   this.productservice.deleteproduct(this.productID).subscribe(data=>{
//     this.productlist=data;
//     console.log(this.productlist)
//   })
   
//  }

}