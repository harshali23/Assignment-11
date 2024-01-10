import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers : [ArithmaticService]
})
export class DemoComponent {

  public Result : any;
  public Result2 : any;
  constructor(private obj : ArithmaticService)
  {
      this.Result = this.obj.Add(10,5);
      this.Result2 = this.obj.Sub(20,10);
  }
}
