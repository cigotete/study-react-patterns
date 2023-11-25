import { CurrentUserLoader } from "./components-container/current-user-loader";
import { UserLoader } from "./components-container/user-loader";
import { UserInfo } from "./components-container/user-info";

export function App() {
  return (
    <>
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