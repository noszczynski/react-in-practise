import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from '../templates/GridTemplate';

const Twitters = ({ twitters }) => <GridTemplate>{twitters}</GridTemplate>;

const mapStateToProps = ({ twitters }) => {
  return { twitters };
};

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(PropTypes.object),
};

Twitters.defaultProps = {
  twitters: [],
};

export default connect(mapStateToProps)(Twitters);
