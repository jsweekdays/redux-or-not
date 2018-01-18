import React from 'react';
import { Badge, Button, ButtonGroup } from 'reactstrap';

import List from './List'

const items = [
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

export default (props) => (
  <div>
    <ButtonGroup style={{marginBottom: '2rem'}}>
      <Button disabled color="primary" outline>Counter <Badge color="primary">{calculateItems(items)}</Badge></Button>
      <Button color="primary">Reset data</Button>
    </ButtonGroup>
    <List items={items} />
  </div>
);
