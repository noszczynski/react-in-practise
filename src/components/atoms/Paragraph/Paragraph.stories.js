import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import Paragraph from './Paragraph';

storiesOf('Paragraph', module).add('default', () => (
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque eaque maiores minus
    natus perferendis quibusdam recusandae! Asperiores assumenda cum, hic inventore, libero porro
    qui quos, recusandae rem repudiandae saepe?
  </Paragraph>
));
