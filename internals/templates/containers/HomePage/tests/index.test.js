import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import XOXGame from '../index';
import messages from '../messages';

describe('<XOXGame />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <XOXGame />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});
