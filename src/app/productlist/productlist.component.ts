import { ProductlistService } from './../services/productlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent implements OnInit {
  productlist:any;

  constructor(private productlistService: ProductlistService) {}

  ngOnInit(): void {
    this.productlistService.getproductlist().subscribe(
      (res) => this.productlist=res,
      (error) => console.log(error)
    );

  }
}
