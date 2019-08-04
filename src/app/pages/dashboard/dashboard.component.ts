import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [{
    data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
    lineTension: 0,
    backgroundColor: 'transparent',
    borderColor: '#007bff',
    borderWidth: 4,
    pointBackgroundColor: '#007bff',
    hoverBackgroundColor: '#007bff',
    pointBorderColor: '#007bff',
    hoverBorderColor: '#007bff',
    pointHoverBackgroundColor: '#007bff',
    pointHoverBorderColor: '#007bff'
  }];
  public lineChartLabels: Label[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public lineChartOptions: ChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        }
      }]
    },
    legend: {
      display: false,
    }
  };
  public lineChartType: ChartType = 'line';

  constructor() {
  }

  ngOnInit() {
  }

}
