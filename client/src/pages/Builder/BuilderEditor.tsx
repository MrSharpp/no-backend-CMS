function BuilderEditor() {
  return (
    <div className="flex flex-col p-4 bg-white shadow w-full">
      <h5 className="text-xl text-gray-600    font-bold dark:text-dark">
        Columns
      </h5>

      <div className="relative overflow-x-auto mt-5">
        <table className=" w-full table-fixed  text-sm text-left text-white-500 dark:text-gray-600 ">
          
          <thead className=" text-xs text-white-700 uppercase border dark:bg-white-700 dark:text-dark-700">
            <tr>
              <th scope="col" className="px-6 py-3 w-40">
                Column
              </th>
              <th scope="col" className="px-6 py-3">
                API
              </th>
              <th scope="col" className="px-6 py-3 w-40">
                Actions
              </th>
            </tr>
          </thead>
          <tbody >
            <tr className="bg-white border-b dark:bg-white-800 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-dark"
              >
                Name
              </th>
              <td className="px-6 py-4">https://www.google.com/hello</td>
              <td className="px-6 py-4 whitespace-no-wrap">Delete / Edit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BuilderEditor;
