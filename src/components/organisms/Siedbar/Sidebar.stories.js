import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Sidebar from './Siedbar';

storiesOf('Organism/Sidebar', module)
  .addDecorator(StoryRouter())
  .add('Notes', () => <Sidebar cardType="notes" />)
  .add('Twitters', () => <Sidebar cardType="twitters" />)
  .add('Articles', () => <Sidebar cardType="articles" />);
