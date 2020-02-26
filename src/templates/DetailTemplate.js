import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserPage from './UserPage';
import Button from '../components/atoms/Button/Button';

const DetailTemplate = ({ pageType, children }) => {
  return (
    <UserPage pageType={pageType}>
      {children}
      <Link to={`/${pageType}`}>
        <Button activeColor={pageType}>save / close</Button>
      </Link>
    </UserPage>
  );
};

DetailTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  pageType: PropTypes.string.isRequired,
};

export default DetailTemplate;
