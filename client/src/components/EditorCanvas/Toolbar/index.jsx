import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMousePointer,
  faArrowsAlt,
  faRulerCombined,
  faPaintBrush,
  faFillDrip
} from "@fortawesome/free-solid-svg-icons";

const Toolbar = () => (
  <div className="toolbar">
    <ListGroup>
      <ListGroupItem tag="button" action>
        <FontAwesomeIcon icon={faMousePointer} />
      </ListGroupItem>
      <ListGroupItem tag="button" action>
        <FontAwesomeIcon icon={faArrowsAlt} />
      </ListGroupItem>
      <ListGroupItem tag="button" action>
        <FontAwesomeIcon icon={faRulerCombined} />
      </ListGroupItem>
      <ListGroupItem tag="button" action>
        <FontAwesomeIcon icon={faPaintBrush} />
      </ListGroupItem>
      <ListGroupItem tag="button" action>
        <FontAwesomeIcon icon={faFillDrip} />
      </ListGroupItem>
      <ListGroupItem>
        <span className="text-primary">T</span>
      </ListGroupItem>
    </ListGroup>
  </div>
);

export default Toolbar;
