import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers } from  '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class RenderserviceService {

  constructor(private http :Http) { }
  Login() :Observable <any>
{
   console.log("On register");
   let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); 
   return this.http.get('http://localhost:51658/api/TemplateList/get' ,options)
   .map((res:Response) => res.json())
} 

ReturnForm(credentials : any) :Observable <any>
{
   console.log("On register");
   let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
   let options = new RequestOptions({ headers: headers });
   console.log(credentials);
   return this.http.post('http://localhost:51658/api/return',credentials,Option)
   .map((response : Response) => response.json());
} 
}





