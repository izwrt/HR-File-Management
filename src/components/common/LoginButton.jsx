const LoginButton = ({ customColorBlue, children, dispatch }) => {
  return (
    <button
      className="customColorBlue w-full text-xl p-2 homeUnitsFont font-semibold  rounded-2xl"
      type="submit"
    >
      {children}
    </button>
  );
};

export default LoginButton;
