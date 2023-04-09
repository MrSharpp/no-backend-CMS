import { ActionIcon, Flex, TextInput } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../store/storeHooks';
import { Icon } from '@iconify/react';
import { modals } from '@mantine/modals';
import { addTable } from '../../store/tableSlice';
import { useRef } from 'react';

function BuilderSidebar() {
  const tables = useAppSelector(state => state.tables);
  const tableNameRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const openModal = () => modals.openConfirmModal({
    title: 'Add Table',
    children: <TextInput ref={tableNameRef} label="Table Name" size="sm" />,
    labels: { confirm: 'Add', cancel: 'Cancel' },
    onConfirm: () => {
      dispatch(addTable(tableNameRef.current?.value));
    },
  });

  return (
    <div className="flex flex-col p-4 bg-white shadow w-64">
      <div className="flow-root">
        <nav aria-label="Main Nav" className="flex flex-col space-y-2">
          <div>
            <Flex justify={'space-between'}>
              {' '}<strong className="block text-xs font-medium uppercase text-gray-400">
                Views
              </strong>
              <ActionIcon onClick={openModal}>
                <Icon icon={'material-symbols:add'} />
              </ActionIcon>
            </Flex>

            <ul className="mt-2 space-y-1">
              {tables.map(table =>
                <li>
                  <a
                    href=""
                    className="block rounded-md bg-gray-100 px-4 py-2 text-xs font-medium text-gray-700"
                  >
                    {table.name}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default BuilderSidebar;
