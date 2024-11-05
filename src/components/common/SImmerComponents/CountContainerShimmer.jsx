function CountContainerShimmer() {
  return (
    <div className="bg-white animate-pulse shadow-sm border-solid border border-slate-100 shadow-gray-200 rounded-lg py-9 px-5 flex flex-col gap-3 2xl:gap-6 2xl:w-[350px] xl:w-[300px] md:w-[350px]">
      <div className="grid grid-cols-3 xl:gap-9 2xl:gap-12 flex-1">
        <div className="h-3 bg-gray-300 gap-10 col-span-3 rounded"></div>
        <div className="h-3 bg-gray-300 col-span-1 rounded"></div>
      </div>
    </div>
  );
}

export default CountContainerShimmer;
