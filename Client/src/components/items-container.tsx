import { useAllItemsContext } from '../pages';
import { ItemsT, ItemsType } from '../types/items';
import { filterData } from '../utils/filter';
import Wrapper from '../wrappers/itmes-container';
import { Items } from './items';
import { PageBtnContainer } from './page-btn-container';

export const ItmesContainer = () => {
  const { data, filters } = useAllItemsContext() as ItemsType;
  const { items, pagination } = data;
  const filteredData = filterData(items, filters);
  if (items.length === 0) {
    return (
      <Wrapper>
        <h2>No Itmes to display</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className='form total'>
        <h5>
          Total: <span className='total'>{pagination.total}</span>
        </h5>
      </div>

      <div className='jobs'>
        {filteredData.map((item: ItemsT) => {
          return <Items key={item.equipment_id} {...item} />;
        })}
      </div>
      {pagination.pages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};
