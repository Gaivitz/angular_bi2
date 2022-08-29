import { Component, OnInit } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngBi2';
  is_selected:any=[]

  constructor()
  {

  }

  ngOnInit()
  {
    if(this.is_selected)
    {
      alert(this.is_selected[0].value)
    }
  }
}
