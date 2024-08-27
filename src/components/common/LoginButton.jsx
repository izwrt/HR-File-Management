const LoginButton = ({ customColorBlue, children }) => {
  return (
    <button className="customColorBlue w-full text-2xl p-3 font-semibold text-white rounded-2xl">
      {children}
    </button>
  );
};

export default LoginButton;
