import { JsonInput, Modal } from '@mantine/core';

function SchemaModal() {
  return (
    <Modal opened={true} onClose={close} title="Edit Schema ">
      <JsonInput
        label="Your package.json"
        placeholder="Textarea will autosize to fit the content"
        validationError="Invalid JSON"
        formatOnBlur
        autosize
        minRows={4}
      />
    </Modal>
  );
}

export default SchemaModal;
