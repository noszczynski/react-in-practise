// eslint-disable-next-line import/no-named-as-default-member
import Card from 'components/molecules/Card/Card';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import plusIcon from 'assets/icons/plus.svg';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import UserPage from './UserPage';
import withContext from '../hoc/withContext';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import NewItemBar from '../components/organisms/NewItemBar/NewItemBar';

const StyledPageHeader = styled.div`
  display: block;
  min-height: 100px;
  padding-bottom: 60px;
  padding-top: 30px;
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

const StyledButtonIcon = styled(ButtonIcon)`
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50px;
  cursor: pointer;
  background-size: 32%;
  z-index: 10;
  transition: transform 0.3s;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotate(45deg);
      &::after {
        opacity: 1 !important;
      }
    `}
  &::after {
    content: 'Close modal';
    display: block;
    font-family: 'Montserrat', sans-serif;
    z-index: 20;
    min-width: 100px;
    position: absolute;
    font-size: 16px;
    top: 140%;
    opacity: 0;
    transform: rotate(-45deg);
    transition: opacity 0.3s;
    font-weight: bold;
    background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : '#000')};
    padding: 8px 20px;
    border-radius: 50px;
    left: -165%;
  }
`;

class GridTemplate extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
  };

  state = {
    isModalOpen: false,
  };

  toggleActiveModal = () => {
    this.setState(prevstate => ({ isModalOpen: !prevstate.isModalOpen }));
  };

  render() {
    const { pageContext, children } = this.props;
    const { isModalOpen } = this.state;

    return (
      <UserPage>
        <div>
          <StyledPageHeader>
            <Input search placeholder="Search" />
            <StyledPageHeading big as="h1">
              {pageContext}
            </StyledPageHeading>
            <Paragraph>
              {children.length} {pageContext}
            </Paragraph>
          </StyledPageHeader>
          <StyledPageContent>
            {children.map(({ header, date, content, link, id }) => {
              return (
                <Card
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
          <StyledButtonIcon
            icon={plusIcon}
            activeColor={pageContext}
            onClick={this.toggleActiveModal}
            isActive={isModalOpen}
          />
          <NewItemBar isOpen={isModalOpen} />
        </div>
      </UserPage>
    );
  }
}

export default withContext(GridTemplate);
