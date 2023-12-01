import PropTypes from 'prop-types';
import { partial } from './partial.jsx';

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

export const SmallButton = partial(Button, { size: "small" });

export const LargeRedButton = partial(Button, {
  size: "large",
  color: "crimson",
});
