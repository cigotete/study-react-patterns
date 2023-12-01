import { ResourceInfo } from "./custom-hooks/resource-info";

export const AppCustomHook = () => {
  return (
    <>
      <h1>Custom Hooks</h1>
      <ResourceInfo resourceUrl={'users'} id={'1'} />
      <ResourceInfo resourceUrl={'books'} id={'1'} />
    </>
  );
}