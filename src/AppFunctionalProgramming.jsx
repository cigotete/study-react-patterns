import { Recursive } from "./functional-programming/recursive";
import { SmallButton, SmallRedButton } from "./functional-programming/composition";
import {
  SmallButton as SmallButtonFromPartial,
  LargeRedButton as LargeRedButtonFromPartial
} from "./functional-programming/Button";

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
      <SmallButtonFromPartial text={"I am small! (from partial)"}/>
      <br />
      <LargeRedButtonFromPartial text="I am large and Red (from partial)"/>
      <br />
      <SmallButton text={"I am small!"}/>
      <br />
      <SmallRedButton text={"I am small and Red"}/>
      <br />
      <Recursive data={myNestedObject} />
    </>
  );
}