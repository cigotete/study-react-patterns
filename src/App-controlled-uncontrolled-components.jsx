import { useState } from "react";
import { UncontrolledForm } from "./controlled-uncontrolled/uncontrolled-form";
import { ControlledForm } from "./controlled-uncontrolled/controlled-form";
import { ControlledModal } from "./controlled-uncontrolled/controlled-modal";

export const AppControlledUncontrolledComponents = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
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