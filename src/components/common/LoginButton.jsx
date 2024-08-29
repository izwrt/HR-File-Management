const LoginButton = ({ customColorBlue, children, dispatch }) => {
  function handlerClick() {
    dispatch({
      type: "isAuthoticated",
      payload: false,
    });
  }

  return (
    <button
      className="customColorBlue w-full text-xl p-2 font-semibold text-white rounded-2xl"
      onClick={handlerClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default LoginButton;
