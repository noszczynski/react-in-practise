import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Input', module)
  .add('default', () => <Input placeholder="login" />)
  .add('search', () => <Input placeholder="search" search />);
