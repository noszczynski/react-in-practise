import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Siedbar/Sidebar';
import withContext from '../hoc/withContext';

const UserPage = ({ children, pageContext }) => (
  <>
    <Sidebar pageType={pageContext} />
    {children}
  </>
);

UserPage.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
};

export default withContext(UserPage);
