function EmployeeCardShimmer() {
  return (
    <div className="border p-2 bg-gray-100 card-shadow rounded-lg">
      <div className="animate-pulse space-x-4 flex items-center justify-center">
        <div className="rounded-full bg-gray-300 h-14 w-14"></div>
        <div className="grid grid-cols-3 gap-3 flex-1">
          <div className="h-3 bg-gray-300 rounded col-span-3 "></div>
          <div className="h-3 bg-gray-300 rounded col-span-1 "></div>
          <div className="col-span-2"></div>
          <div className="h-3 bg-gray-300 rounded col-span-2"></div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCardShimmer;
