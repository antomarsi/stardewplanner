import React, { useState } from "react";
import PropTypes from "prop-types";
import Lightbox from "react-image-lightbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Gallery = ({ title, description, planList, loading }) => {
  const [Open, setOpen] = useState(false);
  const [PhotoIndex, setPhotoIndex] = useState(0);
  return (
    <div className="row gallery">
      <div className="col-12 text-left">
        <h4>
          <span className="title">{title}</span>{" "}
          <small className="text-muted">{description}</small>
        </h4>
      </div>
      {loading && (
        <div className="col-12 text-center">
          <FontAwesomeIcon icon={faSpinner} spin size={"3x"} />
        </div>
      )}
      {!loading &&
        planList.map((planData, index) => (
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center">
            <div
              className="image-wrapper"
              onClick={() => {
                setOpen(true);
                setPhotoIndex(index);
              }}
            >
              <img class="img-fluid rounded" src={planData.render_url} />
            </div>
            <Link class="btn mt-1 py-2 mb-3" to={`/planner/${planData.slug}`}>
              Plan
            </Link>
          </div>
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
    </div>
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
