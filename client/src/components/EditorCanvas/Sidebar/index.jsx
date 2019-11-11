import React, { useState } from "react";
import {
  Row,
  Col,
  Nav,
  NavItem,
  Container,
  NavLink,
  Collapse,
  UncontrolledTooltip,
  Card,
  CardImg,
  CardColumns
} from "reactstrap";
import classNames from "classnames";
import PropTypes from "prop-types";
// import { Container } from './styles';

const BarCategory = ({ title, items }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <NavItem
        onClick={toggleNavbar}
        className={classNames({
          "menu-open": !collapsed,
          "nav-editor-title": true
        })}
      >
        <NavLink className="dropdown-toggle">{title}</NavLink>
      </NavItem>
      <Collapse
        isOpen={!collapsed}
        navbar
        className={classNames("items-menu", { "mb-3": !collapsed })}
      >
        <CardColumns className="tiles-list">
          {items.map(item => (
            <Card key={item.id}>
              <CardImg
                id={item.id}
                src={item.img}
                className="img-fluid"
                alt={item.name}
              />
              <UncontrolledTooltip placement="bottom" target={item.id}>
                {item.name}
              </UncontrolledTooltip>
            </Card>
          ))}
        </CardColumns>
      </Collapse>
    </div>
  );
};

const Sidebar = ({ list }) => (
  <div id="sidebar-wrapper">
    <Nav className="sidebar-nav" vertical>
      {list.map((category, index) => (
        <BarCategory
          key={index}
          title={category.title}
          items={category.items}
        />
      ))}
    </Nav>
  </div>
);

export default Sidebar;
