import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Card', module)
  .add('Note Card', () => <Card />)
  .add('Twitter Card', () => <Card cardType="twitters" />)
  .add('Article Card', () => <Card cardType="articles" />);
