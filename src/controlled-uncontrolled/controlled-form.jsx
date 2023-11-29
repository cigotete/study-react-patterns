import { useEffect } from "react";
import { useState } from "react";

export const ControlledForm = () => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  //console.log("rendering");

  useEffect(() => {
    if (name.length < 1) {
      setError("The name can not be empty");
    } else {
      setError("");
    }
  }, [name]);

  const SubmitForm = (e) => {
    e.preventDefault();
    console.log('name', name);
    console.log('age', age);
  };

  return (
    <form id="controlledComponentForm" onSubmit={SubmitForm}>
      {error && <p>{error}</p>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
