import {
  Box,
  Button,
  Group,
  Modal,
  Stack,
  TextInput,
  Text,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import jp from 'jsonpath';
import JSONPretty from 'react-json-pretty';

import 'react-json-pretty/themes/monikai.css';
import { useEffect, useState } from 'react';
import { trpc } from '../../util/trpc';

interface IForm {
  name: string;
  selector: string;
}

function AddColumn({
  settingsModal,
  setSettingsModal,
  jsonData,
  selectedTable,
}: {
  selectedTable: number;
  jsonData: Array<object>;
  settingsModal: boolean;
  setSettingsModal: (data: boolean) => void;
}) {
  const [jpath, setjPath] = useState<string | string[]>('');
  const form = useForm<IForm>({});

  const { data } = trpc.table.viewTable.useQuery(selectedTable);
  const updateTableMutation = trpc.table.updateTable.useMutation()

  useEffect(() => setjPath(''), [settingsModal]);

  const evaluatePath = (jpathString: string) => {
    try {
      setjPath(jp.query(jsonData[0], jpathString)[0]);
    } catch (err) {
      setjPath('Invalid Json Path');
    }
  };

  const addColumn = (values: IForm) => {
    const columns = JSON.parse(data?.columns || '[]');
    columns.push({values})
    updateTableMutation.mutate({id: selectedTable, data: { columns: JSON.stringify(columns) }})
  };

  return (
    <Modal
      opened={settingsModal}
      onClose={() => setSettingsModal(false)}
      title="Add Column"
      size={'lg'}
    >
      <Box mx={'sm'} mt={'sm'}>
        <form onSubmit={form.onSubmit(addColumn)}>
          <Stack>
            <TextInput
              withAsterisk
              label="Column Name"
              {...form.getInputProps('name')}
            />

            <JSONPretty
              id="json-pretty"
              data={jsonData[0]}
              mainStyle="max-height:400px;"
            />

            <TextInput
              label="JSON Path"
              defaultValue={'$'}
              description="use $ to access root and . to acces its children. eg: $.name"
              {...form.getInputProps('selector')}
              onChange={e => evaluatePath(e.target.value)}
            />

            <Text fz="md">
              {JSON.stringify(jpath)}
            </Text>

            <Group position="right" mt="md">
              <Button
                type="submit"
                className="center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20  hover:shadow-blue-500/40 "
              >
                Add
              </Button>
            </Group>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}

export default AddColumn;
