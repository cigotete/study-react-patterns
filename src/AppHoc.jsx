import { checkProps } from "./high-order-components/hoc-check-props";
import { UserInfo } from "./components-container/user-info";

const UserInfoWrapper = checkProps(UserInfo);

export const AppHoc = () => {
  return (
    <>
    <h1>HOCs</h1>
    <UserInfoWrapper propA="test1" blabla={{ a: 1, age: 23 }} />
    </>
  );
}