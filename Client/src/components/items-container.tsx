import { useAllItemsContext } from '../pages';
import { ItemsT, ItemsType } from '../types/items';
import { filterData } from '../utils/filter';
import Wrapper from '../wrappers/itmes-container';
import { Items } from './items';
import { PageBtnContainer } from './page-btn-container';
import { Link } from 'react-router-dom';

export const ItmesContainer = () => {
  const { data, filters } = useAllItemsContext() as ItemsType;
  const { items } = data;
  const filteredData = filterData(items, filters);
  const inUser = filterData(items, {
    search: '',
    status: 'IN USE',
    condition: 'ALL',
  });
  const inStore = filterData(items, {
    search: '',
    status: 'IN STORAGE',
    condition: 'ALL',
  });
  const inDis = filterData(items, {
    search: '',
    status: 'DISPOSED',
    condition: 'ALL',
  });

  if (items.length === 0) {
    return (
      <Wrapper>
        <Link to='../add-item' className='btn add-item'>
          add item
        </Link>
        <h2>No Itmes to display</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className='total-div'>
        <h5>
          Total: <span className='total'>{filteredData.length} </span>
        </h5>
        <h5>
          In Use: <span className='total'>{inUser.length}</span>
        </h5>
        <h5>
          In Store: <span className='total'>{inStore.length}</span>
        </h5>
        <h5>
          Diposed: <span className='total'>{inDis.length}</span>
        </h5>
      </div>
      <Link to='add-item' className='btn add-item'>
        add item
      </Link>
      <div className='jobs'>
        {filteredData.map((item: ItemsT) => {
          return <Items key={item.equipment_id} {...item} />;
        })}
      </div>
      {data.page > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};
