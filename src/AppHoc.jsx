// import { checkProps } from "./high-order-components/hoc-check-props";
// import { includeUserFetchingData } from "./high-order-components/include-user-fetching-data";
// import { UserInfo } from "./components-container/user-info";
import { UserInfoForm } from "./high-order-components/user-form";

// const UserInfoWrapper = checkProps(UserInfo);
// const UserInfoWithUserFetchData = includeUserFetchingData(UserInfo, "2");

export const AppHoc = () => {
  return (
    <>
    <h1>HOCs</h1>
    <UserInfoForm />
    {/*
    <UserInfoWithUserFetchData />
    <UserInfoWrapper propA="test1" blabla={{ a: 1, age: 23 }} />
    */}
    </>
  );
}