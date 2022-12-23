import React from "react";
import Chart from 'react-apexcharts'
class MyApexChart extends React.Component {
  constructor() {
    super();

    this.state = {
      series: [{
        name: 'DK-1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'DK-2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      options: {
        chart: {
          height: 350,
          type: 'area',
          zoom:{
            enabled:false
          },
          toolbar:{
            show:false
          }

        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        // tooltip: {
        //   x: {
        //     format: 'dd/MM/yy HH:mm'
        //   },
        // },
        // tools: {
        //   download: true,
        //   selection: true,
        //   zoom: false,
        //   zoomin: false,
        //   zoomout: false,
        //   pan: true,
        //   reset: true | '<img src="/static/icons/reset.png" width="20">',
        //   customIcons: []
        // },
      },
    };
  }
  render() {
    return  <Chart options={this.state.options} series={this.state.series} type="area" height="100%" width="100%" />
  }
}



export default MyApexChart;