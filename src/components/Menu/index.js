import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const items = [
  {
    title: 'Homepage',
    to: '/',
    exact: true
  },
  {
    title: 'Task 1',
    to: '/task1'
  },
  {
    title: 'Task 2',
    to: '/task2'
  },
  {
    title: 'Task 3',
    to: '/task3'
  }
]

export default (props) => (
  <Nav tabs>
    {items.map((item, key) => (
      <NavItem key={key}>
        <NavLink tag={RRNavLink} activeClassName="active" exact={item.exact} to={item.to}>
          {item.title}
        </NavLink>
      </NavItem>
    ))}
  </Nav>
);
