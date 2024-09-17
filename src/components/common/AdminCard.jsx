function AdminCard({ image, name, id, department }) {
  return (
    <div className="">
      <div className="flex items-center p-4 bg-gray-100 shadow-lg rounded-lg w-[95%]">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="w-16 h-16 rounded-full object-cover mr-8"
        />
        <div className="">
          <p className="text-lg font-semibold">Nakul</p>
          <p className="text-gray-500">1178</p>
          <p className="text-gray-500">SE1</p>
        </div>
        <div className="ml-auto">
          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="relative w-16 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default AdminCard;
