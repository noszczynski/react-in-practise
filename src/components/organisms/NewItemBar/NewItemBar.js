import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input/Input';
import withContext from '../../../hoc/withContext';
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  right: 0;
  width: 600px;
  max-width: 600px;
  border-left: 8px solid;
  border-left-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : theme.notes};
  z-index: 2;
  background-color: #fff;
  padding: 160px 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
  transition: transform 0.3s;

  h1,
  p {
    margin: 0;
  }
`;

const StyledInput = styled(Input)`
  width: 100%;
  font-size: 13px;
`;

const StyledTextarea = styled(Input)`
  min-height: 30vh;
  width: 100%;
  border-radius: 10px 10px 0 10px;
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
`;

const NewItemBar = ({ pageContext, isOpen }) => {
  const singularPageName =
    pageContext === 'twitters'
      ? 'twitter account'
      : pageContext.substring(0, pageContext.length - 1);

  const requirements = {
    twitters: 'title, description and link to twitter account',
    articles: 'title, description and link to article',
    notes: 'title, description',
  };

  return (
    <StyledWrapper activeColor={pageContext} isOpen={isOpen}>
      <Heading big>Add a new {singularPageName}</Heading>
      <Paragraph>
        A{singularPageName === 'article' && 'n'} {singularPageName} requires{' '}
        {requirements[pageContext]}
      </Paragraph>
      <StyledInput placeholder="title" />
      <StyledTextarea as="textarea" placeholder="content" />
      {pageContext !== 'notes' && <StyledInput placeholder="link" />}
      <Button activeColor={pageContext}>add {singularPageName}</Button>
    </StyledWrapper>
  );
};

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default withContext(NewItemBar);
