import { ajax, AjaxResponse } from "rxjs/ajax";
import { IApiHandler } from "./IHttp";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AjaxApiHandler implements IApiHandler
{
    public callApi()
    {

    }

    getApi<T>(url: string) : Observable<T>
    {
         return ajax<T>(url).pipe(map((x : AjaxResponse<T>)=> x.response));
    }
}