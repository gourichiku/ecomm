import { HttpClient } from '@angular/common/http';
import { Injectable,OnInit} from '@angular/core';
import { Product } from './product';
import { Category } from '../site-layout/category';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }

    createproduct(productBody: any):Observable<Product>{
      const baseurl="http://localhost:3000/products";
      return this.http.post<Product>(baseurl,productBody);
    }

    getdata(productID:number):Observable<Product[]>{
      const baseurl="http://localhost:3000/products/"+productID;
      return this.http.get<Product[]>(baseurl);
    }

    viewproduct(productID:any):Observable<Product[]>{
      // console.log(productID)
      const baseurl="http://localhost:3000/products/"+productID;
      return this.http.get<Product[]>(baseurl);
    }

    viewallproduct():Observable<Product[]>{
      
      const baseurl="http://localhost:3000/products";
      return this.http.get<Product[]>(baseurl);
    }

    updateproduct(productID:any,data:any):Observable<Product>{
      const baseurl="http://localhost:3000/products/"+productID;
      return this.http.put<Product>(baseurl,productID);
    }

    deleteproduct(productID:any):Observable<Product>{
      const baseurl="http://localhost:3000/products/"+productID;
      return this.http.delete<Product>(baseurl);
    }

    searchCategoryProduct(categoryID:any):Observable<Product[]>{
      console.log(categoryID);
      
      const baseurl="http://localhost:3000/products?categoryID="+categoryID;
      console.log(baseurl);
      console.log(this.http.get<Product[]>(baseurl));
      

      return this.http.get<Product[]>(baseurl);
    }
    searchProduct(categoryID:any):Observable<Product[]>{
      console.log(categoryID);
      
      const baseurl="http://localhost:3000/view-product?categoryID="+categoryID;
      console.log(baseurl);
      console.log(this.http.get<Product[]>(baseurl));
      

      return this.http.get<Product[]>(baseurl);
    }

    searchdateProduct(dateparams:any):Observable<Product>{
      const baseurl="http://localhost:3000/product/date="+dateparams;
      return this.http.get<Product> (baseurl);
    }

    getCategory(data:any):Observable<Category[]>{
      const categoryurl=("http://localhost:3000/categories")
      return this.http.get<Category[]>(categoryurl);
    }
}
