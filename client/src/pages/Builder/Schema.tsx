import {
  Box,
  Button,
  Group,
  Modal,
  Stack,
  TextInput,
  Text,
  ActionIcon,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import jp from 'jsonpath';
import JSONPretty from 'react-json-pretty';
import { Icon } from '@iconify/react';

import 'react-json-pretty/themes/monikai.css';
import { useEffect, useState } from 'react';

function SchemaModal({
  schemaModal: schemaModal,
  setSchemaModal: setSchemaModal,
}: {
  schemaModal: boolean;
  setSchemaModal: (data: boolean) => void;
}) {
  const todoSingle = {
    name: 'A Name',
    point: 234,
    dueDate: Date.now(),
  };
  const [json, setJson] = useState(JSON.stringify(todoSingle));
  const [resp, setResp] = useState('undefined');

  const form = useForm({});

  const sendRequest = () =>
    fetch(form.values.url as URL).then(async res => setJson(await res.json()));

  const evaluatePath = (jpathString: string) => {
    try {
      const res = jp.query(json, jpathString)[0];
      setResp(res);
    } catch (err) {
      setResp('Invalid Json Path');
    }
  };

  return (
    <Modal
      opened={schemaModal}
      onClose={() => setSchemaModal(false)}
      title="Define Array Response"
      size={'lg'}
    >
      <Box mx={'sm'} mt={'sm'}>
        <form onSubmit={form.onSubmit(values => {})}>
          <Stack>
            <TextInput
              withAsterisk
              description="Send a GET request to fetch response data"
              label="API Endpoint"
              {...form.getInputProps('url')}
              rightSection={
                <ActionIcon onClick={sendRequest}>
                  <Icon icon={'material-symbols:send-rounded'} />
                </ActionIcon>
              }
            />

            <JSONPretty
              id="json-pretty"
              data={json}
              mainStyle="max-height:400px;"
            />

            <TextInput
              label="JSON Selector"
              defaultValue={'$'}
              description="use $ to access root and . to acces its children. eg: $.name"
              onChange={e => evaluatePath(e.target.value)}
            />

            <Text fz="md">
              {typeof resp} :{' '}
              {Array.isArray(resp)
                ? 'Perfect! Your selector is pointing to an array'
                : 'Please select an array'}
            </Text>

            <Group position="right" mt="md">
              <Button
                type="submit"
                onClick={() => {
                  if (!Array.isArray(resp))
                    alert('Please select an array first');
                }}
                className="center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20  hover:shadow-blue-500/40 "
              >
                Save
              </Button>
            </Group>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}

export default SchemaModal;
