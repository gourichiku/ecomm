import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { UpdateProductComponent } from '../update-product/update-product.component';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
   productID!:any;
   form!:FormGroup
   productData:any=[];
   productlist:any=[];
   user!:any
   data!:any
  constructor(private activatedroute:ActivatedRoute,private productservice:ProductService,
  private route:Router,private formBuilder:FormBuilder,private http:HttpClient){

  } 
  ngOnInit(): void {

    // this.user =localStorage.getItem("value")
    // console.log(this.user)
    // this.data=this.user
    // console.log(this.data);
    
    this.form=this.formBuilder.group({
      categoryID:[''],
      productName:[''],
      price:[''],
      is_availble:[''],
      review:[''],
      waranty:[''],
      vendor_name:['']
    })

    this.activatedroute.paramMap.subscribe(params =>{
      this.productID= params.get('id');
      // console.log(this.productID)

      this.productservice.viewproduct(this.productID).subscribe(viewdata=>{
        // console.log(typeof viewdata)
        // console.log(typeof this.productData);
        this.productData=viewdata;
        // console.log(typeof this.productData);
     })
     

      
      })
  
  }
  delete(){
    this.productservice.deleteproduct(this.productID).subscribe(data=>{
      alert("product deleted successfully!!")
      this.productlist=data;
      console.log(this.productlist)
      this.route.navigateByUrl("/products")
    })
     
   }

   updatedata(productID: number, data: any) {
    data.categoryID = this.form.controls['categoryID'].value;
    data.productName = this.form.controls['productName'].value;
    data.price = this.form.controls['price'].value;
    data.is_availble = this.form.controls['is_availble'].value;
    data.review = this.form.controls['review'].value;
    data.waranty = this.form.controls['waranty'].value;
    data.vendor_name = this.form.controls['vendor_name'].value;
    this.http
      .put<any>('http://localhost:3000/products/'+this.productID,data)
      .subscribe((result: any) => {
        
        this.route.navigateByUrl("/products");
  
        return result;
      });
  }
    
    

  edit(){
    // this.data=JSON.parse(this.data)
    this.productservice.getdata(this.productID).subscribe(res=>{
      //  console.log(res)
       this.data=res;
      //  console.log(this.data);
       
  
    
    this.form.controls['categoryID'].setValue(this.data.categoryID);
    this.form.controls['productName'].setValue(this.data.productName);
    this.form.controls['price'].setValue(this.data.price);
    this.form.controls['is_availble'].setValue(this.data.is_availble);
    this.form.controls['review'].setValue(this.data.review);
    this.form.controls['waranty'].setValue(this.data.waranty);
    this.form.controls['vendor_name'].setValue(this.data.vendor_name);

    })
  }
  }
  
  
  
  
  
  

  
