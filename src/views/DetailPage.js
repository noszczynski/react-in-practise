import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailTemplate from 'templates/DetailTemplate';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';
import withContext from '../hoc/withContext';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 500px;
  height: auto;
  position: relative;
`;

const DateInfo = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
  margin: 0 0 10px;
`;

const Text = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.light};
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 2px solid ${({ theme }) => theme.twitters};
  border-radius: 50px;
  position: absolute;
  right: -100px;
  top: 10px;
`;

const StyledLink = styled.a`
  padding: 15px 0;
  color: ${({ theme }) => theme.black};
`;

class DetailPage extends Component {
  static propTypes = {
    match: PropTypes.object,
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
  };

  static defaultProps = {
    match: null,
    pageContext: 'notes',
  };

  render() {
    const { pageContext } = this.props;

    return (
      <DetailTemplate>
        <Wrapper>
          <Heading>Wake me up before you go go!</Heading>
          <DateInfo>{`3 days`}</DateInfo>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elbis numquam reprehenderit. e et
            eveniet facilis vero.
          </Text>
          {pageContext === 'twitters' && (
            <StyledAvatar
              src={`https://scontent.fktw2-1.fna.fbcdn.net/v/t1.0-9/p960x960/83120798_2739813729417672_3825953439892897792_o.jpg?_nc_cat=103&_nc_ohc=BEjbQwOrImMAX93jNhS&_nc_ht=scontent.fktw2-1.fna&_nc_tp=6&oh=0350b9065dd7f0fcee4005ffb9ec1281&oe=5EFF9F10`}
            />
          )}
          {pageContext === 'articles' && (
            <StyledLink href={`http://google.com`}>
              <Button secondary>open article</Button>
            </StyledLink>
          )}
        </Wrapper>
      </DetailTemplate>
    );
  }
}

export default withContext(DetailPage);
