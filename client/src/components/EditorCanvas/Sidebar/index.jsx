import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Collapse,
  UncontrolledTooltip,
  Card,
  CardImg,
  CardColumns
} from "reactstrap";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { SelectItem } from "../../../store/ducks/editor/actions";
// import { Container } from './styles';

const BarCategory = ({ title, items }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const selectedItem = useSelector(state => state.editor.selected);
  const dispatch = useDispatch();

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
            <Card key={item.id} outline={selectedItem.id === item.id} color={"primary"}>
              <CardImg
                id={item.id}
                src={item.img}
                onClick={() => {
                  dispatch(SelectItem(item));
                }}
                className={classNames([
                  "img-fluid",
                  "pixalated-img",
                  { selected: selectedItem.id === item.id }
                ])}
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
