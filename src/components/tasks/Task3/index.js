import React from 'react';
import { BarChart, Bar } from 'recharts';

const data = [
  {name: 'Page C', value: 2000},
  {name: 'Page D', value: 2780},
  {name: 'Page E', value: 1890},
  {name: 'Page F', value: 2390},
  {name: 'Page G', value: 3490},
  {name: 'Page A', value: 4000},
  {name: 'Page B', value: 3000},
  {name: 'Page C', value: 2000},
  {name: 'Page D', value: 2780},
  {name: 'Page E', value: 1890},
  {name: 'Page F', value: 2390},
  {name: 'Page G', value: 3490},
  {name: 'Page A', value: 4000},
  {name: 'Page B', value: 3000},
  {name: 'Page C', value: 2000},
  {name: 'Page D', value: 2780},
  {name: 'Page E', value: 1890},
  {name: 'Page F', value: 2390},
  {name: 'Page G', value: 3490},
  {name: 'Page A', value: 4000},
  {name: 'Page B', value: 3000},
  {name: 'Page C', value: 2000},
  {name: 'Page D', value: 2780},
  {name: 'Page E', value: 1890},
  {name: 'Page F', value: 2390},
  {name: 'Page G', value: 3490},
  {name: 'Page G', value: 3490},
  {name: 'Page A', value: 4000},
  {name: 'Page B', value: 3000},
  {name: 'Page C', value: 2000},
  {name: 'Page D', value: 2780},
  {name: 'Page E', value: 1890},
  {name: 'Page F', value: 2390},
  {name: 'Page G', value: 3490},
  {name: 'Page A', value: 4000},
  {name: 'Page B', value: 3000},
  {name: 'Page C', value: 2000},
  {name: 'Page D', value: 2780},
  {name: 'Page E', value: 1890},
  {name: 'Page F', value: 2390},
  {name: 'Page C', value: 2000},
  {name: 'Page D', value: 2780},
  {name: 'Page E', value: 1890},
  {name: 'Page F', value: 2390},
  {name: 'Page C', value: 2000},
  {name: 'Page D', value: 2780},
  {name: 'Page E', value: 1890},
  {name: 'Page F', value: 2390},
  {name: 'Page G', value: 3490},
  {name: 'Page G', value: 3490}
];

const ws = new WebSocket('ws://localhost:4000/stock');

ws.onopen = () => {
  console.log('opened!')
};

ws.onmessage = (data) => {
  console.log(data);
};

export default (props) => (
  <div>
    <div>Средние значение __</div>
    <br />

    <BarChart width={450} height={60} data={data}>
       <Bar dataKey='value' fill='#8884d8'/>
     </BarChart>
  </div>
);
