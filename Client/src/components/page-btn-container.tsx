import { useState } from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useAllItemsContext } from '../pages';
import { ItemsType } from '../types/items';
import Wrapper from '../wrappers/page-btn-container';

export const PageBtnContainer = () => {
  const { data, setPagination } = useAllItemsContext() as ItemsType;
  const {
    pagination: { pages, limit, offset },
  } = data;
  const [currentPage, setCurrentPage] = useState(
    Math.floor(offset / limit) + 1
  );
  console.log(currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setPagination({ limit, offset: (page - 1) * limit }); // Update offset for the selected page
  };

  return (
    <Wrapper>
      <button
        className='btn prev-btn'
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <HiChevronDoubleLeft />
        prev
      </button>

      <div className='btn-container'>
        {Array.from({ length: pages }, (_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              className={`btn page-btn ${
                page === currentPage ? 'active-btn' : ''
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        className='btn next-btn'
        disabled={currentPage === pages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};
