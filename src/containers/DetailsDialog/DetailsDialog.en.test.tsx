import Spinner from 'components/Spinner';
import { Gender, Person } from 'models/person';
import * as React from 'react';
import { filmActions } from 'stores/films/actions';
import { mount } from 'testUtils';

import DetailsDialog from '.';

jest.mock('stores/films/actions');

test('connected DetailsDialog', () => {
  const filmUrls = ['first', 'second'];
  const onClose = jest.fn();
  const person: Person = {
    name: 'Jane Doe',
    height: '160',
    mass: '45',
    birthYear: '118Y',
    gender: Gender.Female,
    id: 'unique_url',
    filmUrls,
  };
  const wrapper = mount(<DetailsDialog onClose={onClose} isOpen person={person} />, {
    initialState: {
      films: {
        loading: true,
      },
    },
  });
  expect(filmActions.fetch).toHaveBeenCalledWith({ urls: filmUrls });
  expect(wrapper.containsMatchingElement(<Spinner />)).toBeTruthy();
});
