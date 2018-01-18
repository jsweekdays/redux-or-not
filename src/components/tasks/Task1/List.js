import React from 'react';
import { Row, Col, Button, ListGroup, ListGroupItem } from 'reactstrap';

const List = (props) => (
  <ListGroup>
    {props.items && props.items.map((item, key) => (
      <ListGroupItem key={key} className="justify-content-between">
        <Row>
          <Col xs="6">
            {item.childrens ? (
              <h5>{item.title}</h5>
            ) : (
                item.title
              )}
          </Col>
          <Col xs="6" style={{ textAlign: 'right' }}>
            <Button color="primary" size={'sm'} onClick={() => props.removeItem(item)}>Remove</Button>
          </Col>
        </Row>
        {item.childrens && (
          <div style={{ marginTop: '1em' }}>
            <List items={item.childrens} removeItem={props.removeItem} />
          </div>
        )}
      </ListGroupItem>
    ))}
  </ListGroup>
);

export default List
