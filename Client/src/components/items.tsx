import { ItemsT } from '../types/items';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { ItemInfo } from './item-info';
import { Form } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import Wrapper from '../wrappers/itmes';
import { EditComponent } from './edit';
day.extend(advancedFormat);

export const Items = ({
  equipment_id,
  equipment_type,
  brand,
  model,
  serial_number,
  purchase_date,
  price,
  status,
  assigned_to,
  location,
  warranty_expiry,
  condition,
  buy_from,
}: ItemsT) => {
  const purchaseDate = day(purchase_date).format('MMM Do, YYYY');
  const warrantyDate = day(warranty_expiry).format('MMM Do, YYYY');

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{equipment_type.charAt(0)}</div>
        <div className='info'>
          <h5>{brand}</h5>
          <EditComponent id={equipment_id} link='../edit-item/' />
          <Form method='delete' action={`../delete-item/${equipment_id}`}>
            <button type='submit' className='btn-delete delete-btn c-btn'>
              <FaTrashAlt className='new-icon ' />
            </button>
          </Form>

          <p>{model}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <ItemInfo text={equipment_type} />
          <ItemInfo text={`$ ${price.toString()}`} />
          <ItemInfo text={status} />
          <ItemInfo text={assigned_to as string} />
          <ItemInfo text={location} />
          <ItemInfo text={`S/N: ${serial_number}`} />
          <ItemInfo text={condition} />
          <ItemInfo text={buy_from} />
          <ItemInfo text={purchaseDate} />
          <ItemInfo text={warrantyDate} />
        </div>
      </div>
    </Wrapper>
  );
};
