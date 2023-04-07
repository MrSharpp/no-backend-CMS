import { Table, createStyles, Text, Button, ActionIcon } from '@mantine/core';
import { Icon } from '@iconify/react';
import SchemaModal from './SchemaModal';

const useStyles = createStyles(() => ({
  tableHeader: {
    fontWeight: 500,
  },
}));

function BuilderEditor() {
  const { classes } = useStyles();

  return (
    <div className="flex  flex-col p-4 bg-white shadow w-full">
        <SchemaModal/>
      <div className='flex justify-end'>
        <h5 className="flex-1 text-xl text-gray-600  font-bold dark:text-dark">
            Columns
        </h5>
        
        <div className='flex items-center gap-2'>
        <Button className='center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20  hover:shadow-blue-500/40  '>Add Column</Button>
        <ActionIcon size={'lg'} variant='light'><Icon icon="ep:setting" /></ActionIcon>
        </div>
      </div>

      <div className="relative overflow-x-auto mt-5">
        <Table className='table-fixed'>
          <thead>
            <tr>
              <th className='w-40'>
                <Text className={classes.tableHeader}>Column</Text>
              </th>
              <th>
                <Text className={classes.tableHeader}>API Endpoint</Text>
              </th>

              <th className='w-40'>
                <Text className={classes.tableHeader}>Actions</Text>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>https://www.google.com</td>
              <td>Delete / Edit</td>

            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default BuilderEditor;
