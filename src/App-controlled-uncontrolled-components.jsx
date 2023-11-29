import { useState } from "react";
import { UncontrolledForm } from "./controlled-uncontrolled/uncontrolled-form";
import { ControlledForm } from "./controlled-uncontrolled/controlled-form";

export const AppControlledUncontrolledComponents = () => {
  return (
    <>
      <UncontrolledForm />
      <hr />
      <ControlledForm />
    </>
  );
}