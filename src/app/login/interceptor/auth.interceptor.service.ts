import { HttpInterceptor , HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptor implements HttpInterceptor {

    private token = 'minha_rola';

    intercept (request : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
        
        //debugger



        const requestClone = request.clone(
            /*{
                setHeaders : {
                    Authorization : `Bearer ${this.token}`
                }
            }*/
        );
        
        return next.handle(requestClone);
    }

}