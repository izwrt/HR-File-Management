function NotificationComponent({
  empid,
  employeeName,
  department,
  documentsToBeUploaded,
  timePosted,
  employeeImage,
  employeeId,
  checked,
  selectEmployee,
}) {
  // const selectEachEmployee = () => {
  //   if (e.target.id === empid) {
  //     setSelectAll();
  //   }
  // };

  return (
    <>
      <div className=" border-x-2 text-black w-full h-14 border-b-2 grid grid-cols-[auto_2fr_1fr_1.5fr_1fr_1fr] items-center justify-start opacity-80">
        <input
          id={empid}
          type="checkbox"
          className="w-5 h-5 mx-6 appearance-none checked:bg-green-500 border-2 border-gray-400 rounded-lg"
          checked={checked || false}
          name={employeeName}
          onChange={(e) => {
            selectEmployee(e);
          }}
        />
        <div className="font-semibold flex flex-row items-center gap-2">
          <img
            src={employeeImage}
            className="h-[35px] w-[35px] rounded-full"
          ></img>
          <div>
            {employeeName} ({employeeId})
          </div>
        </div>
        <div></div>
        <div className="font-semibold">{department}</div>
        <div className="font-semibold">{documentsToBeUploaded}</div>
        <div className="col-span-1 justify-self-end mr-10 text-sm">
          {timePosted}
        </div>
      </div>
    </>
  );
}

export default NotificationComponent;
