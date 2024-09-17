function MainDashboardCard({ smallText, largeNumber }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 h-40 md:h-52">
      <p className="text-black font-bold text-base md:text-lg mt-5">
        New Joinings this Month
      </p>
      <p className="text-4xl md:text-6xl font-bold mt-5 ">0</p>
    </div>
  );
}

export default MainDashboardCard;
