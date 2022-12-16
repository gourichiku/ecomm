import { Injectable } from '@angular/core';
import {cartProduct} from './cartproduct'; 

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  items: cartProduct[]=[]

  constructor() { }

  
}
