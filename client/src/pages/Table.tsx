import { useParams } from 'react-router-dom';
import Box from '../components/Box';
import { DataTable } from 'mantine-datatable';
import { trpc } from '../util/trpc';
import { Button } from '@mantine/core';

function Table() {
  const { view } = useParams();
  const { data } = trpc.table.getTables.useQuery();

  return (
    <section className="bg-gray-50 white:bg-gray-900 p-3 sm:p-5 h-full">
      <div className="bg-white white:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <Button color="red" variant="outline">
          Red
        </Button>
        <div className="items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <DataTable
            w={'100%'}
            columns={[
              { accessor: 'name' },
              { accessor: 'streetAddress' },
              { accessor: 'city' },
              { accessor: 'state' },
            ]}
            records={[]}
          />
        </div>
        <div className="overflow-x-auto" />
      </div>
    </section>
  );
}

export default Table;
