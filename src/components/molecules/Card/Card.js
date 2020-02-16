import React from 'react';
import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import LinkIcon from 'assets/icons/link.svg';

const Wrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  min-height: 380px;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const InnerWrapper = styled.div`
  padding: 17px 70px 17px 30px;
  ${({ cardType }) => console.log(cardType)};
  ${({ cardType }) => cardType === 'twitters' && 'padding-right: 120px'};
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : '#FFF')};
  position: relative;

  :first-of-type {
    z-index: 2;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
  margin: 0 0 10px;
`;

const StyledHeading = styled(Heading)`
  margin: 10px 0 0;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitters};
  border-radius: 50px;
  position: absolute;
  right: 25px;
  top: 25px;
`;

const StyledLinkButton = styled.a`
  display: block;
  height: 40px;
  border-radius: 50px;
  width: 40px;
  background: url(${LinkIcon}) 50%/50% no-repeat #fff;
  position: absolute;
  right: 25px;
  top: 25px;
`;

const Card = ({ cardType, title, createdDate, content, link }) => (
  <Wrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>{title}</StyledHeading>
      <DateInfo>{createdDate}</DateInfo>
      {cardType === 'twitters' && <StyledAvatar src={link} />}
      {cardType === 'articles' && <StyledLinkButton href={link} />}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>{content}</Paragraph>
      <Button secondary>Remove</Button>
    </InnerWrapper>
  </Wrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  createdDate: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

Card.defaultProps = {
  cardType: 'notes',
  link: null,
};

export default Card;
