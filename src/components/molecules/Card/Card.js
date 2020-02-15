import React from 'react';
import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import LinkIcon from 'assets/icons/link.svg';

const CARD_TYPE = {
  note: 'note',
  twitter: 'twitter',
  article: 'article',
};

const Wrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  min-height: 380px;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px;
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
  border: 5px solid ${({ theme }) => theme.twitter};
  border-radius: 50px;
  position: absolute;
  right: 25px;
  top: 25px;
`;

const StyledLinkButton = styled(Heading)`
  display: block;
  height: 40px;
  border-radius: 50px;
  width: 40px;
  background: url(${LinkIcon}) 50%/50% no-repeat #fff;
  position: absolute;
  right: 25px;
  top: 15px;
`;

const Card = ({ cardType }) => (
  <Wrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>Hello Adam!</StyledHeading>
      <DateInfo>3 days</DateInfo>
      {cardType === 'twitter' && (
        <StyledAvatar src="https://scontent.fktw2-1.fna.fbcdn.net/v/t1.0-9/p960x960/83120798_2739813729417672_3825953439892897792_o.jpg?_nc_cat=103&_nc_ohc=BEjbQwOrImMAX93jNhS&_nc_ht=scontent.fktw2-1.fna&_nc_tp=6&oh=0350b9065dd7f0fcee4005ffb9ec1281&oe=5EFF9F10" />
      )}
      {cardType === 'article' && (
        <StyledLinkButton href="https://www.facebook.com/adam.noszczynski" />
      )}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate dolorem eius hic
        ipsa iure, iusto maxime minus provident quisquam totam unde? Commodi doloribus iure pariatur
        placeat provident sunt tenetur oribus iure pariatur placeat provident sunt tenetur.
      </Paragraph>
      <Button secondary>Remove</Button>
    </InnerWrapper>
  </Wrapper>
);

Card.propTypes = {
  cardType: PropTypes.string,
};

Card.defaultProps = {
  cardType: CARD_TYPE.note,
};

export default Card;
