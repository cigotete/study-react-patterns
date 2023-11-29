import PropTypes from "prop-types";
import { UncontrolledFlow } from "./controlled-uncontrolled/uncontrolled-flow";

const StepOne = ({ next }) => {
  return (
    <>
      <h1>Step #1: Enter your name</h1>
      <button onClick={() => next({ name: "TestName" })}>Next</button>
    </>
  );
};
StepOne.propTypes = {
  next: PropTypes.func,
};

const StepTwo = ({ next }) => {
  return (
    <>
      <h1>Step #2: Enter your age</h1>
      <button onClick={() => next({ age: 23 })}>Next</button>
    </>
  );
};
StepTwo.propTypes = {
  next: PropTypes.func,
};

const StepThree = ({ next }) => {
  return (
    <>
      <h1>Step #3: Enter your country</h1>
      <button onClick={() => next({ country: "Poland" })}>Next</button>
    </>
  );
};
StepThree.propTypes = {
  next: PropTypes.func,
};

export function AppControlledUncontrolledComponents() {
  return (
    <>
      <UncontrolledFlow
        onDone={(data) => {
          console.log(data);
          alert("Onboarding Flow Done!");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>
    </>
  );
}