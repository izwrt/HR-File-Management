import BlueButton from "../common/BlueButton";

function Notifications() {
  return (
    <div className="relative mt-20 ml-[220px] 2xl:ml-[230px] md:ml-0 h-fit pl-8 pr-12 md:pl-5 md:pr-6">
      <BlueButton label={"All Uploaded"} />
      <div className="bg-gray-500 text-white w-full h-16 mt-4 flex flex-row gap-36 items-center justify-start pl-8 rounded-full">
        <input
          type="checkbox"
          className="w-6 h-6 appearance-none checked:bg-green-500 border-2 border-gray-400 rounded-lg"
        ></input>
        <div>Employee Name</div>
        <div>Department</div>
        <div>Documents Yet To Upload</div>
      </div>
    </div>
  );
}

export default Notifications;
