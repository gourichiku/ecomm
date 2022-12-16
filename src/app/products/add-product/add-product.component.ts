import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  form!:FormGroup;
  value:any
   constructor(private formbuilder:FormBuilder,private productservice:ProductService,private route:Router){}

   ngOnInit(): void {
     this.form=this.formbuilder.group({
       categoryID:[''],
       productName:[''],
       price:[''],
       is_availble:[''],
       review:[''],
       waranty:[''],
       vendor_name:['']
     })
   }

   onSubmit(){
    this.productservice.createproduct(this.form.value).subscribe(data=>{
        //  alert('successfull!!')
          // console.log(JSON.stringify(this.form.value))
          this.value=JSON.stringify(data);
          // localStorage.setItem('value',this.form.value)
          this.form.reset();
          this.route.navigateByUrl("/products")
          return data;
          
    })
   }


}
