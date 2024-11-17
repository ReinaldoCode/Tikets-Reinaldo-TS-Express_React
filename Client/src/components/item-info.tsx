import { ItemI } from '../types/items';
import Wrapper from '../wrappers/item-info';

export const ItemInfo = ({ text }: ItemI) => {
  return (
    <Wrapper>
      <span className='job-text'>{text}</span>
    </Wrapper>
  );
};
