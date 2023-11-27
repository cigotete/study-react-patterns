import axios from "axios";
import { CurrentUserLoader } from "./components-container/current-user-loader";
import { UserLoader } from "./components-container/user-loader";
import { BookInfo } from "./components-container/book-info";
import { UserInfo } from "./components-container/user-info";
import { ResourceLoader } from "./components-container/resource-loader";
import { DataSource } from "./components-container/data-source";

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export function App() {
  return (
    <>
      <hr />
      <h4>
        Loading with fetch function passed as props.
      </h4>
      <DataSource
        getData={() => fetchData("/users/1")}
        resourceName={"user"}
      >
        <UserInfo />
      </DataSource>
      <hr />
      <h4>
        Loading parametrizing the resource url and resource name/type.
      </h4>
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
      <h4>
        Loading parametrizing the user id
      </h4>
      <UserLoader userId={"2"}>
        <UserInfo />
      </UserLoader>
      <hr />
      <h4>
        Loading with no parametrization.
      </h4>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
    </>
  );
}