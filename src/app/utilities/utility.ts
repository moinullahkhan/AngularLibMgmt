export class Utility{
    public static sortData<T>(data: Array<T>, columnName: string,direction: number){

        return data.sort((x: any,y: any)=>{
        return  x[columnName] > y[columnName] ? 1*  direction: -1 *  direction;
      })
    }  
}