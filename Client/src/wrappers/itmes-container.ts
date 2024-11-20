import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  span.total {
    color: orange;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  .total {
    align-content: center;
  }
  @media (min-width: 1280px) {
    .jobs {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
  @media (min-width: 1900px) {
    .jobs {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
    }
  }
`;
export default Wrapper;
