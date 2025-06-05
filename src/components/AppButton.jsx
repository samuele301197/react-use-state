const AppButton = ({ text, handleButtonClick }) => {
  return (
    <button className="btn btn-primary m-3"
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default AppButton;