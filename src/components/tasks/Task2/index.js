import React, { Component } from 'react';
import { Button, Modal, ModalFooter } from 'reactstrap';

import Form from './Form'
import Preview from './Preview'

const trueStateHOC = (Comp) => class WTFClass extends Component {
  state = {
    username: 'Initial username',
    email: 'Initial email',
    comment: 'Initial comment'
  }

  update = key => e => this.setState({...this.state, [key]: e.target.value})

  render() {
    return <Comp {...this.props} update={this.update} form={this.state} />
  }
}

class Task2 extends Component {
  state = {
    modal: false
  }

  toggle = () => this.setState({
    modal: !this.state.modal
  })

  render() {
    const { form, update } = this.props

    return (
      <div>
        <Form onPreviewClick={this.toggle} update={update} {...form} />

        <hr />

        <h4>Preview</h4>
        <Preview {...form} />

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <Preview {...form} />
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default trueStateHOC(Task2);
