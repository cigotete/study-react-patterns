import React from "react";

export const ControlledFlow = ({
  children,
  currentStepIndex,
  onNext,
}) => {
  const next = (data) => {
    onNext(data);
  };

  const numberOfChildren = React.Children.count(children);

  const currentChild = React.Children.toArray(children)[currentStepIndex];

  if (React.isValidElement(currentChild) && currentStepIndex < numberOfChildren) {
    return React.cloneElement(currentChild, { next });
  }

  return currentChild;
};