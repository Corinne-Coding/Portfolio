import "./ToggleButton.scss";

const ToggleButton = ({ language, setLanguage }) => {
  return (
    <div className="toggle-button">
      <label className="switch">
        <input
          type="checkbox"
          onClick={() => {
            setLanguage(!language);
          }}
        />
        <span className="slider round"></span>

        <span className="text-1">fr</span>
        <span className="text-2">en</span>
      </label>
    </div>
  );
};

export default ToggleButton;
