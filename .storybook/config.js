import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';

const loadStories = () => {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
};

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
configure(loadStories, module);
