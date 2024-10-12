import { Inventory, UpdateInverntory } from '../models/inventory';
import { BadRequestError } from '../Error/custom.error';

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
