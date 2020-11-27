import PagingButtons from 'components/PagingButtons';
import PeopleList from 'components/PeopleList';
import DetailsDialog from 'containers/DetailsDialog';
import { Person } from 'models/person';
import * as React from 'react';

interface Props {
  people?: Person[];
  loading: boolean;
  init: () => void;
  fetchNext?: () => void;
  fetchPrev?: () => void;
}

const People = ({ people, init, fetchNext, fetchPrev, loading }: Props) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Person>();
  React.useEffect(() => {
    if (!people) {
      init();
    }
  }, [init, people]);

  // this prevents PeopleList from being re-rendered on row-click
  const onClick = React.useCallback((person: Person) => {
    setDialogOpen(true);
    setSelected(person);
  }, []);

  return (
    <>
      <PagingButtons loading={loading} fetchNext={fetchNext} fetchPrev={fetchPrev} />
      <PeopleList onRowClick={onClick} people={people} loading={loading} />

      <DetailsDialog
        isOpen={dialogOpen && !!selected}
        person={selected}
        onClose={() => {
          setDialogOpen(false);
        }}
      />
    </>
  );
};

export default People;
