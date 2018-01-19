import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default ({ email, username, comment }) => (
  <Card>
    <CardBody>
      <CardTitle>{username}</CardTitle>
      <CardSubtitle>{email}</CardSubtitle>
      <CardText>{comment}</CardText>
    </CardBody>
  </Card>
)
