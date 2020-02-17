import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Card from '../components/molecules/Card/Card';
import UserPage from './UserPage';

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
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  column-gap: 86px;
  row-gap: 86px;
  padding-right: 86px;

  @media (max-width: 570px) {
    padding-right: 0;
  }
`;

const GridTemplate = ({ children, pageType }) => (
  <UserPage pageType={pageType}>
    <StyledWrapper>
      <StyledPageHeader>
        <Input search placeholder="Search" />
        <StyledPageHeading big as="h1">
          {pageType}
        </StyledPageHeading>
        <Paragraph>
          {children.length} {pageType}
        </Paragraph>
      </StyledPageHeader>
      <StyledPageContent>
        {children.map(({ header, date, content, link, id }) => {
          return (
            <Card
              cardType={pageType}
              id={id}
              title={header}
              createdDate={date}
              content={content}
              link={link}
              key={header}
            />
          );
        })}
      </StyledPageContent>
    </StyledWrapper>
  </UserPage>
);

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageType: 'notes',
};

export default GridTemplate;
