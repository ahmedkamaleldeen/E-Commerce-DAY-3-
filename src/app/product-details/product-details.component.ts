import { Component, OnInit } from '@angular/core'
import products from '../../assets/products-array.json'
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productdetails:any;
  constructor(private router:ActivatedRoute) {
  const ID=this.router.snapshot.params['id'];
  this.productdetails=products.find(productID=>productID.id==ID);
  console.log(this.productdetails)
  }
  ngOnInit(): void {
  }

}
