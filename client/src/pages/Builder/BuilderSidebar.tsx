import { ActionIcon, Flex, TextInput } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../store/storeHooks';
import { Icon } from '@iconify/react';
import { modals } from '@mantine/modals';
import { addTable } from '../../store/tableSlice';
import { useRef } from 'react';
import { trpc } from '../../util/trpc';
import { useNavigate } from 'react-router-dom';

function BuilderSidebar({selectedView,setSelectedView}: {selectedView?: number; setSelectedView: (flag: number) => void}) {
  const tableNameRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate()
  
  const getTablesQuery = trpc.table.getTables.useQuery();
  const addTableMutation = trpc.table.addTable.useMutation({onSuccess: () => {
    getTablesQuery.refetch()
  }});

  if(getTablesQuery.isLoading) return <>Loading...</>

  const openModal = () => modals.openConfirmModal({
    title: 'Add Table',
    children: <TextInput ref={tableNameRef} label="Table Name" size="sm" />,
    labels: { confirm: 'Add', cancel: 'Cancel' },
    onConfirm: () => {
      addTableMutation.mutate({name: tableNameRef.current?.value as string })
      
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
              {getTablesQuery.data?.map(table =>
                <li>
                  <a
                    href="#"
                    onClick={() => setSelectedView(table.id)}
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
