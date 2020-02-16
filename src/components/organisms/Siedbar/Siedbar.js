import React from 'react';
import styled from 'styled-components';
import logoIcon from 'assets/icons/logo.svg';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.notes)};
  width: 153px;
  padding: 58px 0 36px;
`;

const StyledLinksList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  flex-direction: column;
  margin-top: 100px;
  height: 220px;
  justify-content: space-between;
`;

const StyledLogoLink = styled(ButtonIcon)`
  background: url(${logoIcon}) center 50% no-repeat;
  background-size: 80%;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  background: url(${logoutIcon}) center 50% no-repeat;
  background-size: 60%;
`;

const InnerWrapper = styled.div``;

const Sidebar = ({ pageType }) => {
  return (
    <Wrapper activeColor={pageType}>
      <InnerWrapper>
        <StyledLogoLink to="/" />
        <StyledLinksList>
          <li>
            <ButtonIcon as={NavLink} exact to="/" icon={penIcon} activeClass="active" />
          </li>
          <li>
            <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeClass="active" />
          </li>
          <li>
            <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeClass="active" />
          </li>
        </StyledLinksList>
      </InnerWrapper>
      <InnerWrapper>
        <StyledLogoutButton as={NavLink} to="login/" />
      </InnerWrapper>
    </Wrapper>
  );
};

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  pageType: 'notes',
};

export default Sidebar;