import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import PropTypes from 'prop-types';

const Notes = ({ notes }) => <GridTemplate>{notes}</GridTemplate>;

const mapStateToProps = ({ notes }) => {
  return { notes };
};

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
};

Notes.defaultProps = {
  notes: [],
};

export default connect(mapStateToProps)(Notes);
