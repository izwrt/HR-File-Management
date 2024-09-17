function EmployeeCard({ image, name, id, department }) {
  return (
    <div className="">
      <div className="flex items-center p-4 bg-gray-100 shadow-lg rounded-lg w-full max-w-md">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-gray-500">{id}</p>
          <p className="text-gray-500">{department}</p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
