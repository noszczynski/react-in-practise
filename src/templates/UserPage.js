import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Siedbar/Sidebar';

const UserPage = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    {children}
  </>
);

UserPage.propTypes = {
  children: PropTypes.node.isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

UserPage.defaultProps = {
  pageType: 'notes',
};

export default UserPage;
