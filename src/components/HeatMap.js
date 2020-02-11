import React, { useEffect, useState } from 'react';
import FusionCharts from 'fusioncharts/core';

// include chart from viz folder - import ChartType from fusioncharts/viz/[ChartType];
import Heatmap from 'fusioncharts/viz/heatmap';

// add chart as dependency - FusionCharts.addDep(ChartType);
FusionCharts.addDep(Heatmap);

// instantiate the chart.

export default function HeatMap() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchedData = {
      P1: [],
      P2: []
    };
    function get(url) {
      if (!url) {
        return Promise.resolve(fetchedData);
      }
      return fetch(url)
        .then(res => res.json())
        .then(({ next, results: [d] }) => {
          fetchedData.P1 = fetchedData.P1.concat(d.P1);
          fetchedData.P2 = fetchedData.P2.concat(d.P2);

          return get(next);
        });
    }

    get(
      'https://api.sensors.africa/v2/data/air/?city=nairobi&from=2019-11-01&value_type=P2,P1&format=json'
    ).then(setData);
  }, []);

  useEffect(() => {
    if (!data) {
      return;
    }
    const days = {};
    data.P1.forEach(({ start_datetime: startDateTime }) => {
      const date = new Date(startDateTime);
      const month = `${new Intl.DateTimeFormat('en-US', {
        month: 'long'
      }).format(date)} ${Math.floor(date.getDate() / 7)}`;
      if (days[month]) {
        days[month] += 1;
      } else {
        days[month] = 1;
      }
    });

    const row = [];
    Object.keys(days).forEach(month =>
      [...new Array(Math.ceil(days[month] / 7))].forEach(() => {
        row.push({
          id: `${month}`,
          label: `${month.split(' ')[0]} Week ${month.split(' ')[1]}`
        });
      })
    );
    const chartInstance = new FusionCharts({
      type: 'heatmap',
      renderAt: 'heatmap-container',
      width: '700',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        chart: {
          theme: 'fusion',
          caption: 'Nairobi',
          subcaption: 'How clean is the air you breathe?',
          xAxisName: 'Days of the Week',
          yAxisName: 'Months',
          showPlotBorder: '1',
          showValues: '1',
          mapByCategory: '1'
        },
        rows: {
          row
        },
        columns: {
          column: [
            {
              id: '0',
              label: 'Monday'
            },
            {
              id: '1',
              label: 'Tuesday'
            },
            {
              id: '2',
              label: 'Wednesday'
            },
            {
              id: '3',
              label: 'Thursday'
            },
            {
              id: '4',
              label: 'Friday'
            },
            {
              id: '5',
              label: 'Saturday'
            },
            {
              id: '6',
              label: 'Sunday'
            }
          ]
        },
        dataset: [
          {
            data: data.P1.map(({ start_datetime: startDateTime, average }) => {
              const date = new Date(startDateTime);
              return {
                rowid: `${new Intl.DateTimeFormat('en-US', {
                  month: 'long'
                }).format(date)} ${Math.floor(date.getDate() / 7)}`,
                columnid: `${date.getDay()}`,
                displayValue: `${average.toFixed(2)}`,
                colorRangeLabel: 'Good'
              };
            })
          }
        ],
        colorRange: {
          gradient: '0',
          color: [
            {
              code: '#006700',
              minValue: '0',
              maxValue: '25',
              label: 'Good'
            },
            {
              code: '#ffff00',
              minValue: '25',
              maxValue: '50',
              label: 'Moderate'
            },
            {
              code: '#ffa500',
              minValue: '50',
              maxValue: '75',
              label: 'Unhealthy for sensitive groups'
            },
            {
              code: '#e60000',
              minValue: '75',
              maxValue: '100',
              label: 'Unhealthy'
            },
            {
              code: '#670067',
              minValue: '100',
              label: 'Very Unhealthy'
            }
          ]
        }
      }
    });

    chartInstance.render();
  }, [data]);
  return <div id="heatmap-container" />;
}
