import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserPage from './UserPage';

const DetailTemplate = ({ pageType, children }) => {
  return (
    <UserPage pageType={pageType}>
      {children}
      <Link to="/notes">go back</Link>
    </UserPage>
  );
};

DetailTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  pageType: PropTypes.string.isRequired,
};

export default DetailTemplate;
