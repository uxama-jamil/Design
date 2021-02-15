import { Component, OnInit,ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  
};

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent  {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartComponent>;

  constructor() {

    this.chartOptions = {
      series: [
        {
          
          data: [10, 41, 35, 51, 49, 62, 69],
          color:"#feb800",
            
          
        },
        {
          
          data: [20, 41, 35, 60, 30, 62, 50]
        }
      ],
      chart: {
        height: 200,
        type: "bar",toolbar:{show:false},width:200,
      
      
      },xaxis:{
        tooltip:{enabled:false},labels:{show:false}
        
      },legend:{
        show:false
      },dataLabels:{enabled:false}
      }
      
    };
  }

   

  


