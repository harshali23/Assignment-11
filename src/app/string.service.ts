import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  CountCapital(str : string) : any
  {
    var upper : number = 0;
    
    for (var i = 0; i < str.length; i++)
    {
      if (str[i] >= "A" && str[i] <= "Z") upper++;
     
    }
    return "Upper case letters :" + upper;
  }


}
