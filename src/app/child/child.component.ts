import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers : [NumberService,StringService]
})
export class ChildComponent {
  public Result : any;
  public Result1 : any;

  constructor(private obj : NumberService, private obj1 : StringService)
  {
      this.Result = this.obj.ChkPrime(11);
      this.Result1 = this.obj1.CountCapital('MarvellousInfosystems');
  }
  

}
