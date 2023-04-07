import { Table, createStyles, Text } from '@mantine/core';

const useStyles = createStyles(() => ({
  tableHeader: {
    fontWeight: 500,
  },
}));

function BuilderEditor() {
  const { classes } = useStyles();

  return (
    <div className="flex flex-col p-4 bg-white shadow w-full">
      <h5 className="text-xl text-gray-600    font-bold dark:text-dark">
        Columns
      </h5>

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
