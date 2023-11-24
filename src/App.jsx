import { CurrentUserLoader } from "./components-container/current-user-loader";
import { UserInfo } from "./components-container/user-info";

export function App() {
  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
    </>
  );
}