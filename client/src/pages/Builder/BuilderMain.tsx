import { Table, createStyles, Text, Button, ActionIcon, Flex } from '@mantine/core';
import { Icon } from '@iconify/react';
import AddColumn from './AddColumn';
import { useState } from 'react';
import SchemaModal from './Schema';
import { useAppSelector } from '../../store/storeHooks';

const useStyles = createStyles(() => ({
  tableHeader: {
    fontWeight: 500,
  },
}));

function BuilderMain() {
  const { classes } = useStyles();
  const [columnModal, setColumnModal] = useState(false);
  const [schemaModal, setSchemaModal] = useState(false);
  const column = useAppSelector((state) => state.columns)[0]

  console.log('columns ' + Object.keys(column))
  


  return (
    <div className="flex  flex-col p-4 bg-white shadow w-full">
        <AddColumn settingsModal={columnModal} setSettingsModal={setColumnModal} jsonData={{hello: "world"}} />
        <SchemaModal schemaModal={schemaModal} setSchemaModal={setSchemaModal}  /> 
      <div className='flex justify-end'>
        <h5 className="flex-1 text-xl text-gray-600  font-bold dark:text-dark">
            Define Table
        </h5>
        
        <div className='flex items-center gap-2'>
        <Button className='center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20  hover:shadow-blue-500/40  ' onClick={() => setColumnModal(true)}>Add Column</Button>
        <ActionIcon size={'lg'} variant='light' onClick={() => setSchemaModal(true)}><Icon icon="ep:setting" /></ActionIcon>
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

              <th>
                <Text className={classes.tableHeader}>JSON Path</Text>
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
              <td>$.name[0]</td>

              <td><Flex>
              <ActionIcon><Icon icon={'material-symbols:edit'} /></ActionIcon><ActionIcon color='red'><Icon height={15} icon={'material-symbols:delete-outline'} /></ActionIcon>
              </Flex>
              </td>

            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default BuilderMain;
