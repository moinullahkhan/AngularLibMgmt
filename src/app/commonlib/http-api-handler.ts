import { Injectable } from "@angular/core";
import { IApiHandler } from "./IHttp";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class HttpApiHandler implements IApiHandler
{
    public callApi()
    {

    }

       constructor(private http: HttpClient){

    }

     getApi<T>(url: string) : Observable<T>{
            return this.http.get<T>(url);
     }
}
