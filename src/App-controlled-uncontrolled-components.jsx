import { useState } from "react";
import PropTypes from 'prop-types';

import { UncontrolledForm } from "./controlled-uncontrolled/uncontrolled-form";
import { ControlledForm } from "./controlled-uncontrolled/controlled-form";
import { ControlledModal } from "./controlled-uncontrolled/controlled-modal";
import { UncontrolledFlow } from "./controlled-uncontrolled/uncontrolled-flow";
import { ControlledFlow } from "./controlled-uncontrolled/controlled-flow";

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
      <button onClick={() => next({ age: 27 })}>Next</button>
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

const StepFour = ({ next }) => {
  return (
    <>
      <h1>Step #4: Enter your gender</h1>
      <button onClick={() => next({ gender: "female" })}>Next</button>
    </>
  );
};
StepFour.propTypes = {
  next: PropTypes.func,
};

const DoneForm = ({ next }) => {
  return (
    <>
      <h1>Final step!</h1>
      <button onClick={() => next({})}>End</button>
    </>
  );
};
DoneForm.propTypes = {
  next: PropTypes.func,
};

export const AppControlledUncontrolledComponents = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = (dataFromStep) => {
    setData(dataFromStep);
    setCurrentStepIndex(currentStepIndex + 1);
    console.log('dataFromStep', dataFromStep, 'currentStepIndex', currentStepIndex);
  };

  return (
    <>

      <h1>Controlled and Uncontrolled Components</h1>

      <hr />
      <h2>Controlled Flow</h2>
      <ControlledFlow
        currentStepIndex={currentStepIndex}
        onNext={next}
      >
        <StepOne />
        <StepTwo />
        {data.age > 26 ?
        <StepThree />
        : <StepFour />
        }
        <DoneForm />
      </ControlledFlow>
      <hr />

      <h2>Uncontrolled Flow</h2>
      <UncontrolledFlow
        onDone={(data) => {
          console.log(data);
          alert("Onboarding Flow Done!");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
        <DoneForm />
      </UncontrolledFlow>

      <hr />

      <button onClick={() => setShowModal(!showModal)}>
        {showModal ? "Hide Modal" : "Show Modal"}
      </button>
      <ControlledModal
        shouldShow={showModal}
        close={
          () => setShowModal(false)
        }
      >
        <h1>Dummy content of the modal.</h1>
      </ControlledModal>

      <hr />
      <UncontrolledForm />
      <hr />
      <ControlledForm />
    </>
  );
}