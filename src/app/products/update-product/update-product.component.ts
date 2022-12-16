import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit{
  productID:any=[];
  Form!:FormGroup
  productlist:any=[]
  value:any;
  productvalue:any=[]
  data:any

  constructor(private activateroute:ActivatedRoute,private formbuilder:FormBuilder,private productservice:ProductService,private http:HttpClient){}

ngOnInit(): void {

  // localStorage.getItem(JSON.parse('value'));
  // console.log(this.value)


  this.Form=this.formbuilder.group({
    categoryID:[],
    productName:[],
    review:[],
    is_availble:[],
    vendor_name:[],
    waranty:[],
    price:[]
})
  this.activateroute.paramMap.subscribe(params=>{
    this.productID = params.get ('id');
    // console.log(this.productID);
})

this.productservice.getdata(this.productID).subscribe(data=>{
  this.productvalue= data;
})

{

}


}



 

}
function updateProduct(From: any) {
  throw new Error('Function not implemented.');
}

