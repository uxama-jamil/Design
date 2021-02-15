import { Component, ViewChild ,OnInit} from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  
};
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() { 
    this.chartOptions = {
      series: [65,30,15],
      chart: {
        width: 280,
      
        type: "pie"
        
      },
      labels: ["GMB Vault", "Trading ", "Other"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            
            chart: {
              width: 200
            },
            legend: {
              show:false
              
              
              
            }

          }
        }
      ]
    };

  }

  ngOnInit(): void {
  }

}
