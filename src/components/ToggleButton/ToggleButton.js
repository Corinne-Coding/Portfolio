import "./ToggleButton.scss";

const ToggleButton = ({ content, setContent, language, setLanguage }) => {
  return (
    <div className="toggle-button">
      <label className="switch">
        <input
          type="checkbox"
          onClick={() => {
            setLanguage(!language);
            setContent(!content);
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
