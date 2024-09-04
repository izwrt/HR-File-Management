function MainDashboardCard({ smallText, largeNumber }) {
  return (
    <div className="w-1/5 bg-white shadow-lg rounded-lg flex items-center p-8">
      <div className="">
        <p className="text-black font-bold text-sm">New Joinings this Month</p>
        <p className="text-6xl font-bold mt-5 ">0</p>
      </div>
    </div>
  );
}

export default MainDashboardCard;
