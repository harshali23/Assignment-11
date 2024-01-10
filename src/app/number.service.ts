import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  ChkPrime(no : number): any
  {
    for(var i= 2; i<no; i++)
    {
        if(no % 2 == 0)
            {
                 return no + " is not a Prime number";
            }
        else
            {
                 return no + " is a Prime number";
            }
    }

  }
}
