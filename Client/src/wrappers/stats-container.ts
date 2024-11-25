import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  row-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .stats_container {
    height: 400px;
  }
  h4 {
    padding-left: 100px;

    padding-bottom: 10px;
  }
`;
export default Wrapper;
