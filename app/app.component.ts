import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  chart: Chart;

  ngOnInit() {
    this.init();
  }
  

  init() {
    let chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      xAxis:{
        gridLineWidth:0,
        lineWidth: 1,
         categories:['week1', 'week2', 'week3', 'week4','week5','week6','week7','week8']
      },
      yAxis:{
          lineWidth: 1,
          gridLineWidth:0
      },
      legend: {
        align: 'right',
        verticalAlign: 'top',
        layout: 'vertical'
      },
      plotOptions : {
        series: {
						marker:false,
        }
      },
      series: [{
        name: 'YEAR 2020',
        color:'red',
        data: [0, 2,1,2.2,1,2.4,5,2]
    }, {
        name: 'YEAR 2019',
        color:'green',
        data: [0.5, 1.4, 3, 3, 2, 3, 2.2, 5],
    }, {
        name: 'YEAR 2018',
        color:'blue',
        data: [0, 1, 2, 2.4, 1.5, 2, 3.2, 4.5],
    },{
        name: 'YEAR 2017',
        color:'orange',
        data: [0.5, 4, 0.5, 1.4, 2.5, 0.1, 2.2, 2],
    }]
    });
     
    this.chart = chart;
      
  }

}
