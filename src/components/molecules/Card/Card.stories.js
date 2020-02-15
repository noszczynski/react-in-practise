import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Card', module)
  .add('Note Card', () => <Card />)
  .add('Twitter Card', () => <Card cardType="twitter" />)
  .add('Article Card', () => <Card cardType="article" />);
