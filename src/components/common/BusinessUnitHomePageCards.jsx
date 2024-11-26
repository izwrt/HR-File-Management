function BusinessUnitHomePageCards({ unit }) {
  const first = unit.name.split(" ", 1);
  console.log(first);
  return (
    <div className=" w-full py-4">
      <div
        key={unit.id}
        className="bg-customBlue h-[180px] rounded-3xl mx-4 p-8 drop-shadow-xl"
      >
        <span className="custom-font-mavan-pro text-white text-4xl overflow-hidden whitespace-nowrap text-ellipsis">
          {first}
        </span>
        <br />
        <span className="custom-font-mavan-pro text-white text-3xl">
          Manager
        </span>

        <div className="flex justify-start w-full pb-10">
          <div className="text-xs custom-font-mavan-pro flex text-white opacity-70 font-semibold flex-col">
            <p className="text-base font-semibold pb-2">{unit.manager}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessUnitHomePageCards;
