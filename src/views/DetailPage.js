import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailTemplate from 'templates/DetailTemplate';
import routes from '../routes';

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
      case routes.note:
        this.setState({ pageType: 'notes' });
        break;
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.article:
        this.setState({ pageType: 'articles' });
        break;
      default:
        return 0;
    }
  }

  render() {
    return (
      <div>
        <DetailTemplate pageType={this.state.pageType}>{this.state.pageType}</DetailTemplate>
      </div>
    );
  }
}

export default DetailPage;
