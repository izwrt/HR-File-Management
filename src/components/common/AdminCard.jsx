function AdminCard({ image, name, empid, department ,empImg}) {
  return (
    <div className="flex items-center px-3 py-2 card-color card-shadow rounded-lg custom-font-mavan-pro scroll-cards">
      <div className="w-14 h-14 rounded-full bg-white flex overflow-hidden">
        <img src={empImg} className=" object-cover mr-8 image-container " />
      </div>
      <div className="flex flex-col overflow-hidden ml-2">
        <p className="custom-font-mavan-pro text-size font-medium opacity-90 truncate">
          {name}
        </p>
        <p className="text-size opacity-70">{empid}</p>
        <p className="text-size opacity-70">{department}</p>
      </div>
      <div className="ml-auto">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-14 h-8 bg-gray-200 peer-focus:outline-none   rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white aft
          er:content-[''] after:absolute after:top-[2px] after:-left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-slate-300"></div>
        </label>
      </div>
    </div>
  );
}

export default AdminCard;
