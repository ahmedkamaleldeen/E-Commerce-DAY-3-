import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {
@Input() product:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  ShowDetails(){
    this.router.navigate(['/productdetails',this.product.id])
  }

}
