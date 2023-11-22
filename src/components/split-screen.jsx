import { styled } from "styled-components";
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
`;

const Panel = styled.div`
  flex: 1;
`;

export const SplitScreen = ({ Left, Right }) => {
  return (
    <Container>
      <Panel>
        <Left title="Left" />
      </Panel>
      <Panel>
        <Right title="Right" />
      </Panel>
    </Container>
  );
};

SplitScreen.propTypes = {
  Left: PropTypes.elementType.isRequired,
  Right: PropTypes.elementType.isRequired,
};
