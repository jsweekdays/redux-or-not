import React, { Component } from 'react';
import { Badge, Button, ButtonGroup } from 'reactstrap';

import List from './List'

const initialState = [
  {
    title: 'Parent 1',
    childrens: [
      {
        title: 'Child 1-1',
      },
      {
        title: 'Child 1-2',
      },
    ]
  },
  {
    title: 'Parent 2',
    childrens: [
      {
        title: 'Child 2-1',
      },
      {
        title: 'Child 2-2',
        childrens: [
          {
            title: 'Child 2-2-1',
          },
          {
            title: 'Child 2-2-2',
          },
        ]
      },
    ]
  },
  {
    title: 'Parent 3',
    childrens: [
      {
        title: 'Child 3-1',
      },
      {
        title: 'Child 3-2',
      },
    ]
  }
]

const calculateItems = (items) => (
  items.reduce((accumulator, item) => {
    if (item.childrens) {
      accumulator += calculateItems(item.childrens);
    }

    return accumulator;
  }, items.length)
)

const removeItem = (items, removedItem) => {
  return items
    .filter((item) => item !== removedItem)
    .map((item) => {
      if (item.childrens) {
        item.childrens = removeItem(item.childrens, removedItem)
      }

      return item
    })
}


const deepClone = (array) => JSON.parse(JSON.stringify(array))

export default class Task1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: deepClone(initialState)
    }

    this.handleReset = this.handleReset.bind(this)
    this.handleRemoveItem = this.handleRemoveItem.bind(this)
  }

  handleReset(event) {
    this.setState({
      items: deepClone(initialState)
    })
  }

  handleRemoveItem(item) {
    return (event) => {
      const { items } = this.state
      this.setState({
        items: removeItem(items, item)
      })
    }
  }

  render() {
    const { items } = this.state
    return (
      <div>
        <ButtonGroup style={{marginBottom: '2rem'}}>
          <Button disabled color="primary" outline>Counter <Badge color="primary">{calculateItems(items)}</Badge></Button>
          <Button color="primary" onClick={this.handleReset}>Reset data</Button>
        </ButtonGroup>
        <List items={items} onRemoveItem={this.handleRemoveItem} />
      </div>
    )
  }
}
