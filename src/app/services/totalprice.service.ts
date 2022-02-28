import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalpriceService {
private totalprice= new BehaviorSubject(0);
  constructor() { }
  getprice(){
    return this.totalprice;
  }
  setprice(newprice:any){
    this.totalprice.next(newprice);
  }
}
