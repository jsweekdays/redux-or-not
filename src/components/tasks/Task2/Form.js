import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default ({ onPreviewClick, update, username, email, comment }) => (
  <Form onSubmit={(e) => { e.preventDefault() }}>
    <FormGroup row>
      <Label for="exampleName" sm={2}>Your name</Label>
      <Col sm={10}>
        <Input type="text" name="name" value={username} onChange={update('username')} id="exampleName" placeholder="Enter your name" />
      </Col>
    </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" value={email} onChange={update('email')}  id="exampleEmail" placeholder="Enter your email" />
        </Col>
      </FormGroup>
    <FormGroup row>
      <Label for="exampleText" sm={2}>Text Area</Label>
      <Col sm={10}>
        <Input type="textarea" name="text" value={comment} onChange={update('comment')}   id="exampleText" placeholder="Enter your comment"  />
      </Col>
    </FormGroup>
    <FormGroup check row>
      <Col sm={{ size: 10, offset: 2 }} style={{padding: 0}}>
        <Button>Submit</Button>{' '}
        <Button onClick={onPreviewClick}>Modal preview</Button>
      </Col>
    </FormGroup>
  </Form>
)
