function InterviewFields({ image, name, inputType }) {
  return (
    <div className="flex gap-10 items-center px-5 py-2 bg-[#F4F4F4]">
      {image}
      <div className="flex flex-col w-[40%]">
        <span className="font-normal text-sm text-gray-500">{name}</span>
        <input
          type={inputType}
          className="custom-date-input bg-[#F4F4F4] border-2 rounded-md px-2 border-gray-300 focus:outline-none text-gray-400"
        />
      </div>
    </div>
  );
}

export default InterviewFields;
