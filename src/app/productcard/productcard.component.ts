// import { TotalpriceService } from './../services/totalprice.service';
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
  // sum=0;
  productsChoosed: any=[];
  constructor(
    private router: Router,
    private activatedrouter: ActivatedRoute,
    private counterservice: CounterService,
    private productlistservice: ProductlistService,
    // private totalprice:TotalpriceService
  ) {}

  ngOnInit(): void {
    const ID = this.activatedrouter.snapshot.params['id'];
    this.counterservice.getCounter().subscribe((val) => (this.counter = val));
    this.productlistservice.getproductbyID(ID).subscribe((val) => {
      // console.log(val);
      this.product = val;
      // this.productsChoosed.push(val)
    });
    this.productlistservice.getproduct().subscribe(val=>{this.productsChoosed=val
      console.log(val);
      // this.totalprice.getprice().subscribe((val)=>this.sum=val);
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

  // for (const i of this.productsChoosed) {
  //   this.sum+=i.price;
  //   this.totalprice.setprice(this.sum);
  // }

  // this.sum+=this.productsChoosed.price;

  // console.log(this.sum);
    // this.router.navigate(['/productdetails', this.product.id]);
  }
}
