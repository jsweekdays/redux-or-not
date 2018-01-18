import React, { Component } from 'react';
import { Badge, Button, ButtonGroup } from 'reactstrap';
import { connect } from 'react-redux';

import List from './List'

//actions
import { calcCount, removeItem, resetState } from '../../../redux/task1';

class Task1 extends Component {
  componentWillMount() {
    this.props.calcCount();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.items !== nextProps.items) {
      this.props.calcCount();
    }
  }

  render() {
    const { items, count, removeItem, resetState } = this.props;
    return (
      <div>
        <ButtonGroup style={{ marginBottom: '2rem' }}>
          <Button disabled color="primary" outline>Counter <Badge color="primary">{count}</Badge></Button>
          <Button color="primary" onClick={resetState}>Reset data</Button>
        </ButtonGroup>
        <List items={items} removeItem={removeItem} />
      </div>
    );
  }
}

export default connect(
  state => ({
    items: state.task1.list,
    count: state.task1.count
  }),
  { calcCount, removeItem, resetState }
)(Task1);
