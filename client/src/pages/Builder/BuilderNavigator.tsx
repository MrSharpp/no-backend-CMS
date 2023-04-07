function BuilderNavigator() {
  return (
    <div className="flex flex-col p-4 bg-white shadow w-64">
      <div className="flow-root">
        <nav aria-label="Main Nav" className="flex flex-col space-y-2">
          <div>
            <strong className="block text-xs font-medium uppercase text-gray-400">
              Views
            </strong>

            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href=""
                  className="block rounded-md bg-gray-100 px-4 py-2 text-xs font-medium text-gray-700"
                >
                  Profile
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="block rounded-lg px-4 py-2 text-xs font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Team
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="block rounded-lg px-4 py-2 text-xs font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default BuilderNavigator;
