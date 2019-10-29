import React, { useState } from "react";
import PropTypes from "prop-types";
import Lightbox from "react-image-lightbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { Row, Col, Button } from "reactstrap";

const Gallery = ({ title, description, planList, loading }) => {
  const [Open, setOpen] = useState(false);
  const [PhotoIndex, setPhotoIndex] = useState(0);
  return (
    <Row className="gallery">
      <Col xs={12} className="text-left">
        <h4>
          <span className="title">{title}</span>{" "}
          <small className="text-muted">{description}</small>
        </h4>
      </Col>
      {loading && (
        <Col xs={12} className="text-center">
          <FontAwesomeIcon icon={faSpinner} spin size={"3x"} />
        </Col>
      )}
      {!loading &&
        planList.map((planData, index) => (
          <Col xs={12} sm={6} md={4} lg={3} xl={2} className="text-center">
            <div
              className="image-wrapper"
              onClick={() => {
                setOpen(true);
                setPhotoIndex(index);
              }}
            >
              <img className="img-fluid rounded" src={planData.render_url} />
            </div>
            <Button className="mt-1 py-2 mb-3" tag={Link} to={`/planner/${planData.slug}`}>
              Plan
            </Button>
          </Col>
        ))}
      {Open && (
        <Lightbox
          mainSrc={planList[PhotoIndex].render_url}
          nextSrc={planList[(PhotoIndex + 1) % planList.length].render_url}
          prevSrc={
            planList[(PhotoIndex + planList.length - 1) % planList.length]
              .render_url
          }
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((PhotoIndex + planList.length - 1) % planList.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((PhotoIndex + 1) % planList.length)
          }
        />
      )}
    </Row>
  );
};

Gallery.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  loading: PropTypes.bool,
  planList: PropTypes.array
};

Gallery.defaultProps = {
  loading: true,
  planList: []
};

export default Gallery;
