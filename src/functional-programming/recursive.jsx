import PropTypes from 'prop-types';

const isValidObj = (data) => typeof data === "object" && data !== null;

export const Recursive = ({ data }) => {
  if (!isValidObj(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);
  console.log(data);
  return (
    <>
      {pairs.map(([key, value]) => {
        return (
          <li key={key}>
            {key}:
            <ul>
              <Recursive data={value} />
            </ul>
          </li>
        );
      })}
    </>
  );
};

Recursive.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};