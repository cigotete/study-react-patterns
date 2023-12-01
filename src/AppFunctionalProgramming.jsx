import { Recursive } from "./functional-programming/recursive";
import { SmallButton, SmallRedButton } from "./functional-programming/composition";

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};

export function AppFunctionalProgramming() {
  return (
    <>
      <SmallButton text={"I am small!"}/>
      <SmallRedButton text={"I am small and Red"}/>
      <Recursive data={myNestedObject} />
    </>
  );
}