import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { filmActions } from 'stores/films/actions';
import getFilmState from 'stores/films/selectors';
import { RootActions, RootState } from 'stores/reducers';

import DetailsDialog from './DetailsDialog';

const mapStateToProps = (state: RootState) => {
  const films = getFilmState(state);
  return films;
};

const mapDispatchToProps = (dispatch: Dispatch<RootActions>) => ({
  fetchFilms: (urls: string[]) => dispatch(filmActions.fetch({ urls })),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsDialog);
