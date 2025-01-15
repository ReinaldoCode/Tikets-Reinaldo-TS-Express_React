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
  .total-div {
    display: flex;
    gap: 15px;
    width: 90vw;
    max-width: var(--fixed-width);
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
  }
  .add-item {
    margin: 20px;
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
