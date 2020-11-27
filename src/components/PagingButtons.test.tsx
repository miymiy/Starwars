import { render, screen } from '@testing-library/react';
import * as React from 'react';

import PagingButtons from './PagingButtons';

test('paging buttons', () => {
  render(<PagingButtons loading />);
  const button = screen.getByText(/Prev/).closest('button');
  expect(button).toBeDisabled();
});
