function NotificationShimmer() {
  return (
    <div className="border-x-2 rounded-lg ">
      <div className="animate-pulse h-14 border-b-2 grid grid-cols-[auto_2fr_1fr_1.5fr_1fr_1fr]  items-center justify-start">
        <div className="w-5 h-5 mx-6 rounded-md bg-gray-300"></div>
        <div className="flex flex-row items-center gap-2 w-40">
          <div className="rounded-full bg-gray-300 h-[35px] w-[35px]"></div>
          <div className="grid grid-cols-3 gap-3 flex-1">
            <div className="h-3 bg-gray-300 rounded col-span-3 "></div>
            <div className="h-3 bg-gray-300 rounded col-span-1 "></div>
          </div>
        </div>
        <div></div>
        <div className="h-3 bg-gray-300 rounded w-32"></div>
        <div className="h-3 bg-gray-300 rounded w-32"></div>
        <div className="h-3 bg-gray-300 rounded w-20 col-span-1 justify-self-end mr-10"></div>
      </div>
    </div>
  );
}

export default NotificationShimmer;
