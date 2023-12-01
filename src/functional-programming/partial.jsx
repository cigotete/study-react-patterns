export const partial = (Component, partialProps) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return <Component {...partialProps} {...props} />;
  };
};