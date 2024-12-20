import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../wrappers/page-btn-container';
import { useAllItemsContext } from '../pages';
import { ItemsType } from '../types/items';

export const PageBtnContainer = () => {
  const { data } = useAllItemsContext() as ItemsType;
  const { page } = data;

  return (
    <Wrapper>
      <button className='btn prev-btn'>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className='btn-container'>
        {Array.from({ length: page }, (_, index) => {
          const page = index + 1;
          return (
            <button key={page} className='btn page-btn'>
              {page}
            </button>
          );
        })}
      </div>

      <button className='btn next-btn'>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};
