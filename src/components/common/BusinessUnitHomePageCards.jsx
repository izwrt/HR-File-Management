function BusinessUnitHomePageCards({ unit }) {
  return (
    <div className=" w-[400px]">
      <div
        key={unit.id}
        className="bg-customBlue h-[200px] text-black rounded-3xl px-8 mx-4 pt-4 mb-4 drop-shadow-xl"
      >
        <div className="flex gap-1">
          <span className="custom-font-mavan-pro text-white text-2xl overflow-hidden whitespace-nowrap text-ellipsis">
            {unit.name}
          </span>
        </div>

        <div className="flex justify-start w-full pt-4 pb-10">
          <div className="text-xs custom-font-mavan-pro flex text-white font-semibold flex-col">
            <p className="text-base font-semibold pb-2">{unit.manager}</p>
            <p className="text-sm pb-0.5">Department</p>
            <p>{unit.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessUnitHomePageCards;
