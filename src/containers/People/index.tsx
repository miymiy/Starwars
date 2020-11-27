import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { peopleActions } from 'stores/people/actions';
import { State } from 'stores/people/reducer';
import { getPeopleState } from 'stores/people/selectors';
import { RootActions, RootState } from 'stores/reducers';

import People from './People';

const mapStateToProps = (state: RootState) => {
  const s = getPeopleState(state);
  return s;
};

const mapDispatchToProps = (dispatch: Dispatch<RootActions>) => ({
  dispatch,
});

const mergeProps = (
  { nextPage, prevPage, people, loading }: State,
  { dispatch }: { dispatch: Dispatch<RootActions> }
) => ({
  people,
  loading,
  init: () => dispatch(peopleActions.init()),
  fetchNext: nextPage ? () => dispatch(peopleActions.fetch({ url: nextPage })) : undefined,
  fetchPrev: prevPage ? () => dispatch(peopleActions.fetch({ url: prevPage })) : undefined,
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(People);
