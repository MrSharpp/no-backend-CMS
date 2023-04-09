function Box({ children }: React.PropsWithChildren) {
  return (
    <div className="bg-white white:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
        {children}
      </div>
      <div className="overflow-x-auto" />
    </div>
  );
}

export default Box;
