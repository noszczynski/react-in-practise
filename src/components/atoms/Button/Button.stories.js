import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => {
    const label = 'Colors';
    const options = {
      Article: 'hsl(49, 100%, 58%)',
      Twitter: 'hsl(196, 83%, 75%)',
      Note: 'hsl(106, 47%, 64%)',
    };

    const defaultValue = options.Primary;
    const groupId = 'GROUP-ID1';

    const value = select(label, options, defaultValue, groupId);

    return <Button color={value}>Primary button</Button>;
  })
  .add('Secondary', () => <Button secondary>Secondary button</Button>);
