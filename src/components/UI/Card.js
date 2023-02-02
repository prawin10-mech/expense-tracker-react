import "./Card.css";

const Card = (props) => {
  classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
