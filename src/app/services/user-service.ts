import { Injectable, Service } from '@angular/core';
import { HttpApiHandler } from '../commonlib/http-api-handler';
import { HttpHandler } from '@angular/common/http';
import { IApiHandler } from '../commonlib/IHttp';

//@Service()
 //@Injectable()
export class UserService {

        users=[
    {
      id: 1001,
      firstName : 'Ashwini',
      lastName : 'kokane',
      gender: 'F',
      age: 32
    },
    {
      id: 1003,
      firstName : 'Manish',
      lastName : 'Verma',
      gender: 'M',
      age: 30
    },
     {
      id: 1002,
      firstName : 'Sumit',
      lastName : 'Joshi',
      gender: 'M',
      age: 42
    },
    {
      id: 1004,
      firstName : 'Varsha',
      lastName : 'changude',
      gender: 'F',
      age: 21
    },
    {
      id: 1005,
      firstName : 'Moin',
      lastName : 'Khan',
      gender: 'M',
      age: 45
    },
  ]

        httpApi! : IApiHandler;

        setHttpHandler(httpApi: IApiHandler){
                this.httpApi = httpApi;
        }



          getUsers(){
            return this.users;
          }

    


    AddUsers(){

     
    }


    DeleteUsers(){

     
    }

}
