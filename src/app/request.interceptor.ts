import { LoaderService } from './services/loader.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
// private loader=new LoaderService();
loader=true
  constructor(private loaderservice :LoaderService) {
    // this.loaderservice.setloader(this.loader);
   }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    // const updaterequest=request.clone
    return next.handle(request).pipe(finalize(()=>this.loaderservice.hide()));}
  }
