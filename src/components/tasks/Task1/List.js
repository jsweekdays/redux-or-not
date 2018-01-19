import React from 'react';
import { Row, Col, Button, ListGroup, ListGroupItem } from 'reactstrap';

const List = (props) => (
  <ListGroup>
    {props.items && props.items.map((item, key) => (
      <ListGroupItem key={key} className="justify-content-between">
        <Row>
          <Col xs="6">
            {item.get('childrens') ? (
              <h5>{item.get('title')}</h5>
            ) : (
                item.get('title')
              )}
          </Col>
          <Col xs="6" style={{ textAlign: 'right' }}>
            <Button color="primary" size={'sm'} onClick={() => props.removeItem(item)}>Remove</Button>
          </Col>
        </Row>
        {item.get('childrens') && (
          <div style={{ marginTop: '1em' }}>
            <List items={item.get('childrens')} removeItem={props.removeItem} />
          </div>
        )}
      </ListGroupItem>
    ))}
  </ListGroup>
);

export default List
