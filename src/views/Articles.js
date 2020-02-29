import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from '../templates/GridTemplate';

const Articles = ({ articles }) => <GridTemplate>{articles}</GridTemplate>;

const mapStateToProps = ({ articles }) => {
  return { articles };
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
};

Articles.defaultProps = {
  articles: [],
};

export default connect(mapStateToProps)(Articles);
