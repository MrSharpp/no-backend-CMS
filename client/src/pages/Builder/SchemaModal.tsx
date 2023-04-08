import {
  Box,
  Button,
  Checkbox,
  Group,
  Modal,
  Portal,
  Select,
  Stack,
  StyleProperty,
  TextInput,
  Text,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import jp from 'jsonpath';
import JSONPretty from 'react-json-pretty';

import 'reactflow/dist/style.css';
import 'react-json-pretty/themes/monikai.css';
import { useEffect, useState } from 'react';

function SchemaModal({
  settingsModal,
  setSettingsModal,
}: {
  settingsModal: boolean;
  setSettingsModal: (data: boolean) => void;
}) {
  const [jpath, setjPath] = useState<string | string[]>('');
  const form = useForm({});
  const dummyResponse = {
    name: 'Amir Alam',
    age: 17,
    fans: [{ name: 'fan1' }, { name: 'fann2' }],
  };

  useEffect(() => setjPath(''), [settingsModal]);

  const evaluatePath = (jpathString: string) => {
    let resp: string[] | string = '';
    try {
      resp = jp.query(dummyResponse, jpathString);
    } catch (err) {
      resp = 'Invalid Json Path';
    }
    setjPath(resp);
  };

  // onInput={e => {
  //   const value = e.target.value;
  //   const dotIncluded = value?.includes(".")
  //   if(!dotIncluded) return;
  //   console.log(value.split('.').at(-1))

  // }}

  return (
    <Modal
      opened={settingsModal}
      onClose={() => setSettingsModal(false)}
      title="Add Column"
      styles={{
        content: {
          overflowY: 'visible !important',
        },
      }}
    >
      <Box mx={'sm'} mt={'sm'}>
        <form onSubmit={form.onSubmit(values => console.log(values))}>
          <Stack>
            <TextInput
              withAsterisk
              label="Column Name"
              {...form.getInputProps('columnName')}
            />

            <JSONPretty id="json-pretty" data={dummyResponse} />

            <TextInput
              label="JSON Path"
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
                Submit
              </Button>
            </Group>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}

export default SchemaModal;
