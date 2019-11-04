import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faInfo,
  faPencilRuler,
  faCircle
} from "@fortawesome/free-solid-svg-icons";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <Navbar color="dark" dark fixed="top" expand="md">
      <NavbarBrand tag={RRNavLink} to="/" exact>
        Stardew planner <small className="text-muted">v2</small>
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar className="mr-auto">
          <NavItem>
            <NavLink tag={RRNavLink} to="/" exact activeClassName="active">
              <FontAwesomeIcon icon={faHome} mask={faCircle} /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/planner" activeClassName="active">
              <FontAwesomeIcon icon={faPencilRuler} mask={faCircle} /> Planner
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/about" activeClassName="active">
              <FontAwesomeIcon icon={faInfo} mask={faCircle} /> About
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Donate!
            </DropdownToggle>
            <DropdownMenu className="bg-dark">
              <DropdownItem>
                <a
                  href="https://www.paypal.me/hpeinar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="img-fluid"
                    src="https://www.paypalobjects.com/webstatic/paypalme/images/pp_logo_small.png"
                    alt="Donate using Paypal"
                  />
                </a>
              </DropdownItem>
              <DropdownItem>
                <a
                  href="https://www.patreon.com/bePatron?c=1239286"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="img-fluid"
                    src="https://c5.patreon.com/external/logo/downloads_wordmark_white_on_coral.png"
                    alt="Donate using Paypal"
                  />
                </a>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <Nav navbar className="my-lg-0">
          <NavItem>
            <NavLink
              href="https://www.facebook.com/groups/stardewplanner/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://discord.gg/QBqBAzp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDiscord} size="2x" />
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

/*
<button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=">
          </a>
        </li>
      </ul>
      <span className="navbar-text">Navbar text with an inline element</span>
    </div>
*/

export default NavBar;
