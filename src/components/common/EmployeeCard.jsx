function EmployeeCard({ image, name, id, department }) {
  return (
    <div className="flex items-center p-4 bg-gray-100 shadow-lg rounded-lg w-full max-w-xs h-auto">
      <img
        src={image}
        alt={`${name}'s profile`}
        className="w-16 h-16 rounded-full object-cover mr-4"
      />
      <div>
        <p className="text-lg font-semibold">Nakul</p>
        <p className="text-gray-500">1178</p>
        <p className="text-gray-500">SE</p>
      </div>
    </div>
  );
}

export default EmployeeCard;
