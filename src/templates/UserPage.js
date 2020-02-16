import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Siedbar/Siedbar';
import styled from 'styled-components';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';

const StyledPageHeader = styled.div`
  display: block;
  min-height: 100px;
  padding-bottom: 60px;
  h1 {
    margin-bottom: 0;
  }
  p {
    font-weight: ${({ theme }) => theme.bold};
  }
`;
const StyledPageHeading = styled(Heading)`
  text-transform: capitalize;
`;
const StyledWrapper = styled.div``;

const StyledPageContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 86px;
  row-gap: 86px;
  padding-right: 86px;
`;

const UserPage = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    <StyledWrapper>
      <StyledPageHeader>
        <Input search placeholder="Search" />
        <StyledPageHeading big as="h1">
          {pageType}
        </StyledPageHeading>
        <Paragraph>3 days</Paragraph>
      </StyledPageHeader>
      <StyledPageContent>{children}</StyledPageContent>
    </StyledWrapper>
  </>
);

UserPage.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

UserPage.defaultProps = {
  children: PropTypes.element.isRequired,
  pageType: 'notes',
};

export default UserPage;
