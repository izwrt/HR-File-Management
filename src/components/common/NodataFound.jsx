import noData from "../../assets/images/no-data.png";

const NodataFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6  w-full">
      <span>
        <img className="w-[50%] mx-auto" src={noData}></img>
      </span>
      <span className="custom-font-mavan-pro text-3xl font-bold no-data-found-text">
        No Data Found
      </span>
    </div>
  );
};

export default NodataFound;
