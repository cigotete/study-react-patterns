import axios from "axios";
import PropTypes from "prop-types"; 
import { CurrentUserLoader } from "./components-container/current-user-loader";
import { UserLoader } from "./components-container/user-loader";
import { BookInfo } from "./components-container/book-info";
import { UserInfo } from "./components-container/user-info";
import { ResourceLoader } from "./components-container/resource-loader";
import { DataSource } from "./components-container/data-source";
import { DataSourceWithRenderProps } from "./components-container/data-source-with-render-props";

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const getDataFromLocalStorage = (key) => () => {
  return localStorage.getItem(key);
};

const Message = ({ msg }) => <h1>{msg}</h1>;

export function App() {
  return (
    <>
      <h4>Displaying a message using data from localstorage.</h4>
      <DataSource getData={() => getDataFromLocalStorage("test")} resourceName={"msg"}>
        <Message />
      </DataSource>
      <hr />
      <h4>Using Render as props (cloneElement replacement)</h4>
      <DataSourceWithRenderProps
        getData={
          () => fetchData("/users/1")
        }
        render={
          (resource) => <UserInfo user={resource} />
        }
      >
      </DataSourceWithRenderProps>
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
      <DataSource
        getData={() => fetchData("/books/1")}
        resourceName={"book"}
      >
        <BookInfo />
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
        ResourceName={"book"}
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

Message.propTypes = {
  msg: PropTypes.string,
};