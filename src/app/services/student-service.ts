import { Injectable, Service } from '@angular/core';
import { HttpApiHandler } from '../commonlib/http-api-handler';
import { IApiHandler } from '../commonlib/IHttp';
import { AjaxApiHandler } from '../commonlib/ajax-api-handler';
import { StudentDto } from '../models/Students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

//httpApi: HttpApiHandler = new HttpApiHandler();
    httpApi! : IApiHandler;
    setHttpHandler(httpApi: IApiHandler){
                this.httpApi = httpApi;
        }

        constructor(private ajax: HttpApiHandler){
           
        }

    getStudents(){  
       return this.ajax.getApi<Array<StudentDto>>('http://localhost:3000/api/students');
    }

    AddUsers(){

    }


    DeleteUsers(){

    }

}
