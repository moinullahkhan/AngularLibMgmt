import { Service } from '@angular/core';
import { HttpApiHandler } from '../commonlib/http-api-handler';
import { IApiHandler } from '../commonlib/IHttp';

@Service()
export class StudentService {

//httpApi: HttpApiHandler = new HttpApiHandler();
    httpApi! : IApiHandler;
    setHttpHandler(httpApi: IApiHandler){
                this.httpApi = httpApi;
        }


    users=[
    {
      id: 1001,
      firstName : 'Ashwini',
      lastName : 'kokane',
      gender: 'F',
      subject: 'Java'
    },
    {
      id: 1003,
      firstName : 'Manish',
      lastName : 'Verma',
      gender: 'M',
      subject: 'Python'
    },
     {
      id: 1002,
      firstName : 'Sumit',
      lastName : 'Joshi',
      gender: 'M',
      subject: 'Oracle'
    },
    {
      id: 1004,
      firstName : 'Varsha',
      lastName : 'changude',
      gender: 'F',
      subject: 'SQL Server'
    },
    {
      id: 1005,
      firstName : 'Moin',
      lastName : 'Khan',
      gender: 'M',
      subject: 'Node'
    },
  ]

    getStudents(){  
       return this.users;
    }

    AddUsers(){

    }


    DeleteUsers(){

    }

}
