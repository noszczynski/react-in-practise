import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import linkIcon from 'assets/icons/link.svg';
import logoIcon from 'assets/icons/logo.svg';
import logoutIcon from 'assets/icons/logout.svg';
import magnifierIcon from 'assets/icons/magnifier.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.notes};
  width: 500px;
  height: 500px;
`;

storiesOf('Icons', module)
  .addDecorator(story => <YellowBackground>{story()}</YellowBackground>)
  .add('active', () => <ButtonIcon icon={bulbIcon} active />)
  .add('bulbIcon', () => <ButtonIcon icon={bulbIcon} />)
  .add('linkIcon', () => <ButtonIcon icon={linkIcon} />)
  .add('logoIcon', () => <ButtonIcon icon={logoIcon} />)
  .add('logoutIcon', () => <ButtonIcon icon={logoutIcon} />)
  .add('magnifierIcon', () => <ButtonIcon icon={magnifierIcon} />)
  .add('penIcon', () => <ButtonIcon icon={penIcon} />)
  .add('plusIcon', () => <ButtonIcon icon={plusIcon} />)
  .add('twitterIcon', () => <ButtonIcon icon={twitterIcon} />);
