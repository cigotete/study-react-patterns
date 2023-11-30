import { UserInfo } from "./custom-hooks/user-info";

export const AppCustomHook = () => {
  return (
    <>
      <h1>Custom Hooks</h1>
      <UserInfo userId={'2'} />
    </>
  );
}