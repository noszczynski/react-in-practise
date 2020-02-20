import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserPage from './UserPage';

const DetailTemplate = ({ pageType, children }) => (
  <UserPage pageType={pageType}>
    {children}
    <Link to="/notes">go back</Link>
  </UserPage>
);

DetailTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  pageType: PropTypes.string.isRequired,
};

export default DetailTemplate;
