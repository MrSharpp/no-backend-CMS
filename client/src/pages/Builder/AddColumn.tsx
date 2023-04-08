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

function AddColumn({
  settingsModal,
  setSettingsModal,
  jsonData,
}: {
  jsonData: object;
  settingsModal: boolean;
  setSettingsModal: (data: boolean) => void;
}) {
  const [jpath, setjPath] = useState<string | string[]>('');
  const form = useForm({});

  useEffect(() => setjPath(''), [settingsModal]);

  const evaluatePath = (jpathString: string) => {
    let resp: string[] | string = '';
    try {
      resp = jp.query(jsonData, jpathString);
    } catch (err) {
      resp = 'Invalid Json Path';
    }
    setjPath(resp);
  };

  return (
    <Modal
      opened={settingsModal}
      onClose={() => setSettingsModal(false)}
      title="Add Column"
      size={'lg'}
    >
      <Box mx={'sm'} mt={'sm'}>
        <form onSubmit={form.onSubmit(values => console.log(values))}>
          <Stack>
            <TextInput
              withAsterisk
              label="Column Name"
              {...form.getInputProps('columnName')}
            />

            <JSONPretty id="json-pretty" data={jsonData} />

            <TextInput
              label="JSON Path"
              defaultValue={'$'}
              description="use $ to access root and . to acces its children. eg: $.name"
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
