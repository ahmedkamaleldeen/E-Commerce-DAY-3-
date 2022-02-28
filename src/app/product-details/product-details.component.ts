import { CounterService } from './../services/counter.service';
import { ProductlistService } from './../services/productlist.service';
import { Component, OnInit } from '@angular/core';
// import products from '../../assets/products-array.json';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  // products: any;
  productdetails: any;
  productsChoosed:any=[];
  constructor(
    private router: ActivatedRoute,
    private productlist: ProductlistService,
    private counter: CounterService
  ) {
    // const ID=this.router.snapshot.params['id'];
    // this.productdetails=products.find(productID=>productID.id==ID);
    // console.log(this.productdetails)
  }
  ngOnInit(): void {
    const ID = this.router.snapshot.params['id'];

    // this.productdetails=products.find(productID=>productID.id==ID);
    // console.log(this.productdetails)

    // this.productlist.getproductlist().subscribe((res) => {
    //   this.products = res;
    //   this.productdetails = this.products.find(
    //     (productID: any) => productID.id == ID
    //   );
    // });
    this.productlist.getproductbyID(ID).subscribe((result: any) => {
      this.productdetails = result;
      console.log(result);

      // console.log(this.productsChoosed);


      // this.productlist.setproduct(result);

    // });
    // this.productlist.getproductlist().subscribe(val=>{this.productsChoosed=val
    // // console.log(val);
    // });
  });
  // console.log(this.productsChoosed);
}
// showconsole(){
//   this.productsChoosed.push(this.productdetails);
//   console.log(this.productsChoosed);
//   this.productlist.setproduct(this.productsChoosed);
// }

}

