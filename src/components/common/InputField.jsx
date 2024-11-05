function InputField({ fieldName, idName, type }) {
  return (
    <div className="flex flex-col">
      <label className="font-normal">{fieldName}</label>
      <input
        type={type}
        id={idName}
        className="mt-2 px-2 py-3 rounded-lg border-2 border-gray-500  "
      ></input>
    </div>
  );
}

export default InputField;
