import React, { Component } from 'react'
import { BarChart, Bar } from 'recharts'

const data = [
  {value: 20},
  {value: 27},
  {value: 18},
  {value: 23},
  {value: 34},
  {value: 40},
  {value: 30},
  {value: 20},
  {value: 27},
  {value: 18},
  {value: 23},
  {value: 34},
  {value: 40},
  {value: 30},
  {value: 20},
  {value: 27},
  {value: 18},
  {value: 23},
  {value: 34},
  {value: 40},
  {value: 30},
  {value: 20},
  {value: 27},
  {value: 18},
  {value: 23},
  {value: 34},
  {value: 34},
  {value: 40},
  {value: 30},
  {value: 20},
  {value: 27},
  {value: 18},
  {value: 23},
  {value: 34},
  {value: 40},
  {value: 30},
  {value: 20},
  {value: 27},
  {value: 18},
  {value: 23},
  {value: 20},
  {value: 27},
  {value: 18},
  {value: 23},
  {value: 20},
  {value: 27},
  {value: 18},
  {value: 23},
  {value: 34},
  {value: 34}
];

const pluck = key => obj => obj[key]
const sum = get => arr => arr.reduce((acc, next) => acc + get(next), 0)
const average = get => arr => sum(get)(arr) / arr.length
const getValue = pluck('value')

class WebSocketSUPAPUPAConnectorWithoutRedux extends Component {
  state = {
    data
  }

  update = e => {
    const { data: [_, ...teil] } = this.state
    this.setState({ data: [...teil, { value: parseInt(e.data, 10) }] })
  }

  componentDidMount() {
    this.ws = new WebSocket(this.props.host)
    this.ws.onmessage = this.update
  }

  componentWillUnmount() {
    this.ws.close()
  }

  render() {
    const { data } = this.state
    const { children } = this.props

    if (typeof children === 'function') {
      return children(data)
    }

    return children
  }
}

export default (props) => (
  <WebSocketSUPAPUPAConnectorWithoutRedux host='ws://localhost:4000/stock'>
    {data => (<div>
      <div>Средние значение {average(getValue)(data)}</div>
      <br />

      <BarChart width={450} height={60} data={data}>
         <Bar dataKey='value' fill='#8884d8'/>
       </BarChart>
    </div>)}
  </WebSocketSUPAPUPAConnectorWithoutRedux>
);
