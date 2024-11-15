function InputField({ fieldName, idName, type }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-light">{fieldName}</label>
      <input
        type={type}
        id={idName}
        className="mt-2 px-2 py-2 rounded-lg border-2 border-[#D9D9D9] focus:outline-none  "
      ></input>
    </div>
  );
}

export default InputField;
