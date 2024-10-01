function CountContainer({ smallText, largeNumber }) {
  return (
    <div className="bg-white shadow-sm border-solid border border-slate-100 shadow-gray-200 rounded-lg py-6 px-5 flex flex-col gap-3 2xl:gap-6 2xl:w-[350px] xl:w-[300px] md:w-[350px] bg-gree">
      <span className="text-black font-semibold text-base 2xl:text-base custom-font-mavan-pro opacity-80">
        {smallText}
      </span>
      <span className="text-5xl font-medium custom-font-mavan-pro opacity-80">{largeNumber}</span>
    </div>
  );
}

export default CountContainer;