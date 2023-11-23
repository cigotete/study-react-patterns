import PropTypes from 'prop-types';

export const RegularList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      { items.map((item, i) => (
        // <ItemComponent key={i} author={ item } />
        <ItemComponent key={i} {...{ [ sourceName ]: item }} />
      ))}
    </>
  );
};

RegularList.propTypes = {
  items: PropTypes.array.isRequired,
  sourceName: PropTypes.string.isRequired,
  ItemComponent: PropTypes.elementType.isRequired,
};
