import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Primary', () => (
    <Button>Primary button</Button>
  ))
  .add('Secondary', () => (
    <Button secondary>Secondary button</Button>
  ));
