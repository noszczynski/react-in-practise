import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserPage from './UserPage';
import Button from '../components/atoms/Button/Button';
import withContext from '../hoc/withContext';

const DetailTemplate = ({ pageContext, children }) => {
  return (
    <UserPage>
      {children}
      <Link to={`/${pageContext}`}>
        <Button activeColor={pageContext}>save / close</Button>
      </Link>
    </UserPage>
  );
};

DetailTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
};

export default withContext(DetailTemplate);
