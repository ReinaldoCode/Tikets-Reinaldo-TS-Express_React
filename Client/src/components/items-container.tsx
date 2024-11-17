import { useAllItemsContext } from '../pages';
import { ItemsT, ItemsType } from '../types/items';
import Wrapper from '../wrappers/itmes-container';
import { Items } from './items';

export const ItmesContainer = () => {
  const { data } = useAllItemsContext() as ItemsType;

  if (data.length === 0) {
    return (
      <Wrapper>
        <h2>No Itmes to display</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className='jobs'>
        {data.map((item: ItemsT) => {
          return <Items key={item.equipment_id} {...item} />;
        })}
      </div>
    </Wrapper>
  );
};
