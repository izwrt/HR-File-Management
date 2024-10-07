function AdminCard({ image, name, id, department }) {
  return (
   
      <div className="flex items-center p-2 bg-gray-100 card-shadow rounded-lg custom-font-mavan-pro scroll-cards bg-">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="w-16 h-16 rounded-full object-cover mr-8"
        />
        <div className="flex flex-col overflow-hidden">
          <p className="text-sm font-medium truncate">Nakul V Kamath</p>
          <p className="text-sm opacity-70">1178</p>
          <p className="text-sm opacity-70">SE1</p>
        </div>
        <div className="ml-auto">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="relative w-16 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
  
  );
}

export default AdminCard;
