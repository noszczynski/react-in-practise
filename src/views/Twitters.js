import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from '../templates/GridTemplate';

const Twitters = ({ twitters }) => <GridTemplate pageType="twitters">{twitters}</GridTemplate>;

const mapStateToProps = ({ twitters }) => {
  return { twitters };
};

export default connect(mapStateToProps)(Twitters);
