import { Inventory, UpdateInverntory } from '../models/inventory';
import { BadRequestError } from '../error/custom.error';

export const getItemData = (item: Inventory) => {
  const {
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
    buy_from,
  } = item;
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
    !condition ||
    !buy_from
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
    buy_from,
  ];
  return value;
};

export const getUpdateItemData = (
  update: UpdateInverntory,
  item: Inventory,
  id: string,
) => {
  const {
    updatedStatus,
    updatedAssigned_to,
    updatedLocation,
    updatedCondition,
  } = update;

  const { status, assigned_to, location, condition } = item;
  const values = [
    updatedStatus === status || !updatedStatus ? status : updatedStatus,
    updatedAssigned_to === assigned_to || !updatedAssigned_to ? assigned_to : updatedAssigned_to,
    updatedLocation === location || !updatedLocation ? location : updatedLocation,
    updatedCondition ===condition || !updatedCondition ?condition : updatedCondition,
    id,
  ]
  return values;
};
