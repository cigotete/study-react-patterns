import PropTypes from 'prop-types';

export const NumberedList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      { items.map((item, i) => (
        <>
          <h3>{ i + 1 }</h3>
          <ItemComponent key={i} {...{ [ sourceName ]: item }} />
        </>
      ))}
    </>
  );
};

NumberedList.propTypes = {
  items: PropTypes.array.isRequired,
  sourceName: PropTypes.string.isRequired,
  ItemComponent: PropTypes.elementType.isRequired,
};
