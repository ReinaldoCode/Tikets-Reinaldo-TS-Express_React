import { Inventory } from '../models/inventory';
import { BadRequestError } from '../Error/custom.error';

export const getItenData = (item: Inventory) => {
  const {
    equipment_type,
    brand,
    model,
    serial_number,
    price,
    status,
    user_id,
    assigned_to,
    location,
    warranty_expiry,
    condition,
  } = item;
  const purchase_date = new Date();
  if (
    !equipment_type ||
    !brand ||
    !model ||
    !serial_number ||
    !purchase_date ||
    !price ||
    !status ||
    !user_id ||
    !assigned_to ||
    !location ||
    !warranty_expiry ||
    !condition
  )
    throw new BadRequestError('Information missing');
  const value = [
    equipment_type,
    brand,
    model,
    serial_number,
    purchase_date,
    price,
    status,
    user_id,
    assigned_to,
    location,
    warranty_expiry,
    condition,
  ];
  return value;
};
