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
  const [json, setJson] = useState('{\n   hello:"world"\n}');
  const form = useForm({});

  return (
    <Modal
      opened={schemaModal}
      onClose={() => setSchemaModal(false)}
      title="Set API"
      size={'lg'}
    >
      <Box mx={'sm'} mt={'sm'}>
        <form onSubmit={form.onSubmit(values => console.log(values))}>
          <Stack>
            <TextInput
              withAsterisk
              description="Send a GET request to fetch response data"
              label="API"
              {...form.getInputProps('columnName')}
              rightSection={
                <ActionIcon>
                  <Icon icon={'material-symbols:send-rounded'} />
                </ActionIcon>
              }
            />

            <JSONPretty id="json-pretty" data={json} />

            <Group position="right" mt="md">
              <Button
                type="submit"
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
