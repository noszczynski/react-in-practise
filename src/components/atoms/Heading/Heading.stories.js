import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Heading', module)
  .add('Big', () => <Heading big>Big Header</Heading>)
  .add('Normal', () => <Heading>Normal Header</Heading>);
