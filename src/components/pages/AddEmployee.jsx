import { BsPersonCircle } from "react-icons/bs";

function AddEmployee() {
  return (
    <>
      <div className="font-bold ml-6 mt-10">Add Employee</div>
      <div className="bg-red-600 shadow-lg rounded-lg h-full my-4 mx-6 overflow-auto">
        <button className="p-14">
          <BsPersonCircle className="h-24 w-24" />
        </button>
        <p className="text-cyan-300">Active Status</p>
      </div>
    </>
  );
}

export default AddEmployee;
