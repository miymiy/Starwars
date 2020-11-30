/* eslint-disable @typescript-eslint/no-explicit-any */
import { render as rtlRender } from '@testing-library/react';
import { mount as enMount, MountRendererProps } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { initialState as films } from 'stores/films/reducer';
import { initialState as page } from 'stores/page/reducer';
import { initialState as people } from 'stores/people/reducer';

import reducer from './stores/reducers';

interface Props {
  initialState?: any;
  mockDispatch?: boolean;
}

const init = {
  films,
  people,
  page,
};

const getStore = (state: any) =>
  createStore(reducer, {
    ...init,
    ...state,
  });

const dispatch = jest.fn();

interface WrapperProps {
  children: React.ReactElement;
}

const getWrapper = (state = {}, mockDispatch = true) => ({ children }: WrapperProps) => {
  const store = getStore(state);
  if (mockDispatch) {
    store.dispatch = dispatch;
  }
  return <Provider store={store}>{children}</Provider>;
};

const render = (ui: React.ReactElement, props: Props = {}) => {
  const { initialState, mockDispatch = true, ...renderOptions } = props;
  const Wrapper: any = getWrapper(initialState, mockDispatch);
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

const mount = (ui: React.ReactElement, options: MountRendererProps & Props = {}) => {
  const { initialState, mockDispatch = true, ...rest } = options;
  const Wrapper: any = getWrapper(initialState, mockDispatch);
  return enMount(ui, {
    wrappingComponent: Wrapper,
    ...rest,
  });
};

export { render, dispatch, mount };
