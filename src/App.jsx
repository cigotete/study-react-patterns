import { SplitScreen } from "./components/split-screen";
import PropTypes from 'prop-types';

const LeftSideComp = ({title}) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
};

const RightSideComp = ({title}) => {
  return <h2 style={{ backgroundColor: "burlywood" }}>{title}</h2>;
};

export function App() {
  return (
    <SplitScreen Left={ LeftSideComp } Right={ RightSideComp } />
  );
}

LeftSideComp.propTypes = {
  title: PropTypes.string.isRequired,
};
RightSideComp.propTypes = {
  title: PropTypes.string.isRequired,
};