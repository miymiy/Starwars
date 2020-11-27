import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Spinner from 'components/Spinner';
import { Film } from 'models/film';
import { Person } from 'models/person';
import * as React from 'react';

interface OwnProps {
  isOpen: boolean;
  onClose: () => void;
  person?: Person;
}

interface Props extends OwnProps {
  fetchFilms: (urls: string[]) => void;
  loading: boolean;
  films?: Film[];
}

const DetailsDialog = ({ isOpen, onClose, fetchFilms, loading, films, person }: Props) => {
  React.useEffect(() => {
    if (person) {
      fetchFilms(person.filmUrls);
    }
  }, [fetchFilms, person]);

  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={isOpen}
      onClose={onClose}
      aria-labelledby="person-dialog-title"
      aria-describedby="person-dialog-description"
    >
      <DialogTitle id="person-dialog-title">{person?.name}</DialogTitle>
      <DialogContent>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell width={100} scope="row">
                Birth year
              </TableCell>
              <TableCell>{person?.birthYear}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row">Gender</TableCell>
              <TableCell>{person?.gender}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row">Films</TableCell>
              <TableCell>
                {loading || !films ? (
                  <Spinner />
                ) : (
                  <>
                    {films.map((film) => (
                      <React.Fragment key={film.date}>
                        {film.title}
                        <br />
                      </React.Fragment>
                    ))}
                  </>
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose} color="primary" autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailsDialog;
