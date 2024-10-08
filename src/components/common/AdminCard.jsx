function AdminCard({ image, name, id, department }) {
  return (
    <div className="flex items-center px-3 py-2 card-color card-shadow rounded-lg custom-font-mavan-pro scroll-cards">
      <div className="w-14 h-14 rounded-full bg-white">
        {/* <img src={image} className="w-16 h-16 rounded-full object-cover mr-8" /> */}
      </div>
      <div className="flex flex-col overflow-hidden ml-2">
        <p className="custom-font-mavan-pro text-size font-medium opacity-90 truncate">
          Nakul V Kamath
        </p>
        <p className="text-size opacity-70">1178</p>
        <p className="text-size opacity-70">SE1</p>
      </div>
      <div className="ml-auto">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div className="relative w-14 h-8 bg-gray-200 peer-focus:outline-none   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white aft
          er:content-[''] after:absolute after:top-[2px] after:-left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-gray-300"></div>
        </label>
      </div>
    </div>
  );
}

export default AdminCard;
