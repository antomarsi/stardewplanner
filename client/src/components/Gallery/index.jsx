import React from "react";
import PropTypes from "prop-types";
// import { Container } from './styles';

const Gallery = ({ title, description, list, loading }) => (
  <div className="row gallery">
    <div className="col-12 text-left">
      <h4>
        <span className="title">{title}</span>{" "}
        <small className="text-muted">{description}</small>
      </h4>
    </div>
    {list.map(m => (
      <div className="col-3">{m}</div>
    ))}
  </div>
);

Gallery.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  loading: PropTypes.bool,
  list: PropTypes.array
};
Gallery.defaultProps = {
  loading: true,
  list: []
};

export default Gallery;
