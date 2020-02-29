import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from '../templates/GridTemplate';

const Articles = ({ articles }) => <GridTemplate pageType="articles">{articles}</GridTemplate>;

const mapStateToProps = ({ articles }) => {
  return { articles };
};

export default connect(mapStateToProps)(Articles);
