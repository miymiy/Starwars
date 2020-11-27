import Paper from '@material-ui/core/Paper';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Person } from 'models/person';
import * as React from 'react';

import Spinner from './Spinner';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      cursor: 'pointer',
      '&:active': {
        backgroundColor: theme.palette.action.selected,
      },
    },
  })
)(TableRow);

interface Props {
  people?: Person[];
  onRowClick: (person: Person) => void;
  loading: boolean;
}

const PeopleList = ({ people, onRowClick, loading }: Props) => (
  <TableContainer component={Paper}>
    <Table aria-label="table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Name</StyledTableCell>
          <StyledTableCell align="right">Height</StyledTableCell>
          <StyledTableCell width={100} align="right">
            Mass
          </StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {loading || !people ? (
          <StyledTableRow>
            <StyledTableCell colSpan={3}>
              <Spinner />
            </StyledTableCell>
          </StyledTableRow>
        ) : (
          people.map((person) => (
            <StyledTableRow
              key={person.id}
              onClick={() => {
                onRowClick(person);
              }}
            >
              <StyledTableCell>{person.name}</StyledTableCell>
              <StyledTableCell align="right">{person.height}</StyledTableCell>
              <StyledTableCell align="right">{person.mass}</StyledTableCell>
            </StyledTableRow>
          ))
        )}
      </TableBody>
    </Table>
  </TableContainer>
);

export default React.memo(PeopleList);
