import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        fontSize: size === "large" ? "25px" : "16px",
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
};
Button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export const SmallButton = (props) => {
  return <Button {...props} size={"small"} />;
};

export const SmallRedButton = (props) => {
  return <SmallButton {...props} color={"crimson"} />;
};
