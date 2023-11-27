import { CurrentUserLoader } from "./components-container/current-user-loader";
import { UserLoader } from "./components-container/user-loader";
import { UserInfo } from "./components-container/user-info";
import { ResourceLoader } from "./components-container/resource-loader";

export function App() {
  return (
    <>
      <ResourceLoader
        ResourceUrl={"/users/3"}
        ResourceName={"user"}
      >
        <UserInfo />
      </ResourceLoader>
      <hr />
      <ResourceLoader
        ResourceUrl={"/books/1"}
        ResourceName={"books"}
      >
        <BookInfo />
      </ResourceLoader>
      <hr />
      <UserLoader userId={"2"}>
        <UserInfo />
      </UserLoader>
      <hr />
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
    </>
  );
}