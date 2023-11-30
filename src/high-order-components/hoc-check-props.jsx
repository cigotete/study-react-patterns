export const checkProps = (Component) => {
  const WrappedComponent = (props) => {
    console.log(props);
    return <Component {...props} />;
  };

  WrappedComponent.displayName = `WithCheckProps(${getDisplayName(Component)})`;

  return WrappedComponent;
};

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}