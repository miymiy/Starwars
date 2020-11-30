import { mount } from 'enzyme';
import * as React from 'react';

import PagingButtons from './PagingButtons';

test('paging buttons', () => {
  const wrapper = mount(<PagingButtons loading />);
  const button = wrapper.find('button').first();
  expect(button.props().disabled).toBeTruthy();
});
