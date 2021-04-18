import "./Link.scss";

const Link = ({ index, item }) => {
  return (
    <a href="#" key={index} className="link">
      {item.text}
    </a>
  );
};

export default Link;
