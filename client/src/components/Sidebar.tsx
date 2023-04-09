import { Icon } from '@iconify/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../store/storeHooks';

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const tables = useAppSelector(state => state.tables);

  const highlight = (path: string) =>
    `${location.pathname === path && 'bg-gray-100'}`;

  return (
    <aside className="flex flex-wrap h-screen flex-col justify-between border-r bg-white w-1/6">
      <div className="px-4 py-6">
        <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
          whew data
        </span>

        <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
          {tables.map(table =>
            <a
              href="#"
              onClick={() =>
                navigate(`/table/${table.name.replaceAll(' ', '-')}`)}
              className={`flex items-center gap-2 rounded-lg  px-4 py-2 text-gray-700 ${highlight(
                '/'
              )}`}
            >
              <Icon icon={'material-symbols:table-chart'} />

              <span className="text-sm font-medium">
                {' '}{table.name}{' '}
              </span>
            </a>
          )}

          <a
            href="#"
            onClick={() => navigate('/view-builder')}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 mt-auto ${highlight(
              '/view-builder'
            )}`}
          >
            <Icon icon={'uil:setting'} />

            <span className="text-sm font-medium"> View Builder </span>
          </a>
        </nav>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="#"
          className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
        >
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <p className="text-xs">
              <strong className="block font-medium">Eric Frusciante</strong>

              <span> eric@frusciante.com </span>
            </p>
          </div>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
