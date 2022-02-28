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
product:any;
  constructor(
    private activatedrouter: ActivatedRoute,
    private router: Router,
    private productlist: ProductlistService,
    private counter:CounterService
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
    this.productlist.getproduct().subscribe(val=>{this.product=val
      console.log(val);
    });
  }
  // ShowDetails(){
  //   this.router.navigate(['/card',this.products.id])
  // }


}
