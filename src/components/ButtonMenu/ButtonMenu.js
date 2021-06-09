// -------------- //
// Button.js SCSS //
// -------------- //

import "./ButtonMenu.scss";

const ButtonMenu = ({ content, item, setContent }) => {
  return (
    <div
      className={
        content === item.ref
          ? "button-menu selected"
          : "button-menu not-selected"
      }
      onClick={() => {
        setContent(item.ref);
      }}
    >
      {item.text}
    </div>
  );
};

export default ButtonMenu;
