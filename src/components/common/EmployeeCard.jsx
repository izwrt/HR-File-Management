function EmployeeCard({ image, name, id, department }) {
  return (
    <div className="">
      <div className="flex items-center p-2 bg-gray-100 card-shadow rounded-lg custom-font-mavan-pro scroll-cards-employee">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div className="flex flex-col overflow-hidden">
          <p className="text-sm font-medium truncate ">{name}</p>
          <p className="text-sm opacity-70">{id}</p>
          <p className="text-sm opacity-70">{department}</p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
