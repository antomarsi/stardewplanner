import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMousePointer,
  faArrowsAlt,
  faRulerCombined,
  faPaintBrush,
  faFillDrip,
  faEye,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { ToggleSidebar } from "../../../store/ducks/editor/actions";
import classNames from "classnames";

const Toolbar = () => {
  const sidebarOpen = useSelector(state => state.editor.sidebarOpen);
  const dispatch = useDispatch();
  return (
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
        <ListGroupItem
          tag="button"
          action
          title="Toggle Sidebar"
          onClick={() => {
            dispatch(ToggleSidebar());
          }}
        >
          <FontAwesomeIcon
            icon={sidebarOpen ? faEye : faEyeSlash}
            className={classNames([
              { "text-primary": sidebarOpen },
              { "text-muted": !sidebarOpen }
            ])}
          />
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};
export default Toolbar;
