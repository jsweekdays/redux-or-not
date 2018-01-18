import React, { Component } from 'react';
import { Button, Modal, ModalFooter } from 'reactstrap';

import Form from './Form'
import Preview from './Preview'

class Task2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Form />

        <hr />

        <h4>Preview</h4>
        <Preview />

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <Preview />
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Task2;
