import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMousePointer, faArrowsAlt } from "@fortawesome/free-solid-svg-icons";

const Toolbar = () => (
  <div className="toolbar">
  <ListGroup>
    <ListGroupItem tag="button" action>
      <FontAwesomeIcon icon={faMousePointer} />
    </ListGroupItem>
    <ListGroupItem tag="button" action>
      <FontAwesomeIcon icon={faArrowsAlt} />
    </ListGroupItem>
  </ListGroup>
  </div>
);

export default Toolbar;
