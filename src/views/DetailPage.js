import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailTemplate from 'templates/DetailTemplate';
import { routes } from '../routes';

class DetailPage extends Component {
  static propTypes = {
    match: PropTypes.object,
  };

  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    const { path } = this.props.match;

    switch (path) {
      case routes.notes:
        this.setState({ pageType: 'notes' });
        break;
      case routes.twitters:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.articles:
        this.setState({ pageType: 'articles' });
        break;
      default:
        return 0;
    }
  }

  render() {
    return <DetailTemplate pageType={this.state.pageType}>dupa</DetailTemplate>;
  }
}

export default DetailPage;
