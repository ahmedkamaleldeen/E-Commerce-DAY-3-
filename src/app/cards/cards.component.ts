import { TotalpriceService } from './../services/totalprice.service';
import { CounterService } from './../services/counter.service';
import { ProductlistService } from './../services/productlist.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  product: any;
  counter = 0;
  sum = 0;
  flag: boolean = true;
  constructor(
    private activatedrouter: ActivatedRoute,
    private router: Router,
    private productlist: ProductlistService,
    private counterservice: CounterService,
    private totalprice: TotalpriceService
  ) {}

  ngOnInit(): void {
    // const ID = this.activatedrouter.snapshot.params['id'];

    // this.productdetails=products.find(productID=>productID.id==ID);
    // console.log(this.productdetails)

    // this.productlist.getproductlist().subscribe((res) => {
    //   this.products = res;
    //   // this.productdetails = this.products.find(
    //   //   (productID: any) => productID.id == ID
    //   // );
    // });
    // this.productlist
    //   .getproductbyID(ID)
    //   .subscribe((result: any) => console.log(result));
    this.productlist.getproduct().subscribe((val) => {
      this.product = val;
      console.log(val);
    });
    this.counterservice.getCounter().subscribe((val) => (this.counter = val));
    // this.totalprice.getprice().subscribe(val=>this.sum=val);
    for (const i of this.product) {
      this.sum += i.price;
    }
    // console
  }
  // ShowDetails(){
  //   this.router.navigate(['/card',this.products.id])
  // }
  // increase(){
  //   this.counterservice.setCounter(++this.counter);
  // }
  // decrease(){
  //   this.counterservice.setCounter(--this.counter);
  // }
  hascard() {
    if (this.counter == 0) return true;
    else return false;
  }
  removecard() {
    // this.flag = !this.flag;

  }
}
