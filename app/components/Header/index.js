import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './xox.png';
import messages from './messages';

const ResponsiveImgWrapper = styled.div`
  width: 20%;
  margin: 0 auto;
`;

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <A href="https://www.google.ro/search?ei=hINoWpPRFYOTU4fIlcgI&q=tic+tac+toe&oq=tic+tac+toe&gs_l=psy-ab.3..35i39k1j0i203k1l9.4891.4891.0.5081.1.1.0.0.0.0.88.88.1.1.0....0...1c.1.64.psy-ab..0.1.88....0.1bSsz1FAij4">
          <ResponsiveImgWrapper>
            <Img src={Banner} alt="XOX Logo" />
          </ResponsiveImgWrapper>
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.game} />
          </HeaderLink>
          <HeaderLink to="/players">
            <FormattedMessage {...messages.players} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
