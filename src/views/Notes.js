import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';

const Notes = ({ notes }) => <GridTemplate pageType="notes">{notes}</GridTemplate>;

const mapStateToProps = ({ notes }) => {
  return { notes };
};

export default connect(mapStateToProps)(Notes);
