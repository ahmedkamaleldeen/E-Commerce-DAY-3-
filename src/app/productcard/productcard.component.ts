import { ActivatedRoute } from '@angular/router';
import { ProductlistService } from './../services/productlist.service';
import { CounterService } from './../services/counter.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css'],
})
export class ProductcardComponent implements OnInit {
  @Input() product: any;
  counter = 0;
  productsChoosed: any=[];
  constructor(
    private router: Router,
    private activatedrouter: ActivatedRoute,
    private counterservice: CounterService,
    private productlistservice: ProductlistService
  ) {}

  ngOnInit(): void {
    const ID = this.activatedrouter.snapshot.params['id'];
    this.counterservice.getCounter().subscribe((val) => (this.counter = val));
    this.productlistservice.getproductbyID(ID).subscribe((val) => {
      // console.log(val);
      this.product = val;
      this.productsChoosed.push(val)
    });
    this.productlistservice.getproduct().subscribe(val=>{this.productsChoosed=val
      console.log(val);
    });
    //
    // console.log(this.productsChoosed);

  }

  ShowDetails() {
    this.router.navigate(['/productdetails', this.product.id]);
    // this.productlistservice.setproduct(this.productsChoosed);
  }
  IncreaseCount() {
    // this.productsChoosed= this.productsChoosed.push(this.product);
    // this.productlistservice.setproduct(this.productsChoosed);
    this.counterservice.setCounter(++this.counter);
    this.productsChoosed.push(this.product);
  console.log(this.productsChoosed);
  this.productlistservice.setproduct(this.productsChoosed);
    // this.router.navigate(['/productdetails', this.product.id]);
  }
}
