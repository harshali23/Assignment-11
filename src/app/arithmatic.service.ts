import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {
 
  constructor() 
  {}
  Add(A : number,B : number ) : number
  {
     var Ans : number;
     Ans = A + B;
     return Ans;
  }

  Sub(A : number,B : number ) : number
  {
    var Ans2 : number;
    Ans2 = A - B;
    return Ans2;
  }
}
