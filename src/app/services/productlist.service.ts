import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  private product=new BehaviorSubject([]);
  constructor(private http:HttpClient) { }
  getproductlist(){
   return this.http.get('https://fakestoreapi.com/products')
  }
  getproductbyID(ID:any){
    return this.http.get(`https://fakestoreapi.com/products/${ID}`)
   }
   getproduct(){
    return this.product;
  }
  setproduct(newproduct:any){
    this.product.next(newproduct);
  }
}
