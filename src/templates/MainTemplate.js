import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import PageContext from '../context';

class MainTemplate extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  state = {
    pageType: 'notes',
  };

  setCurrentPage = (prevState = '') => {
    const pageTypes = ['twitters', 'articles', 'notes'];
    const {
      location: { pathname },
    } = this.props;

    const [currentPage] = pageTypes.filter(page => pathname.includes(page));
    prevState.pageType !== currentPage && this.setState({ pageType: currentPage });
  };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  render() {
    const { children } = this.props;
    const { pageType } = this.state;

    return (
      <div>
        <PageContext.Provider value={pageType}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </PageContext.Provider>
      </div>
    );
  }
}

export default withRouter(MainTemplate);
