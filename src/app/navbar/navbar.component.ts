import { CounterService } from './../services/counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
counter=0;
product:any;

  constructor(private couterservice:CounterService) { }

  ngOnInit(): void {
    this.couterservice.getCounter().subscribe(val=>this.counter=val);
    // this.cou.getproduct().subscribe(val=>this.product=val);
  }
  // setproduct(){
  //   this.couterservice.setproduct(this.product);
  // }
  showProducts(){

  }

}
