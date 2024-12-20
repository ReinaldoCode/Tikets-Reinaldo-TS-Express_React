export const SELECT_ALL_INVENTORY = `SELECT * FROM inventory ORDER BY purchase_date, equipment_id ASC LIMIT $1 OFFSET $2`;
export const CREATE_NEW_ITEM = `INSERT INTO inventory (equipment_type, brand, model, serial_number, purchase_date, price, status, user_id, assigned_to, location, warranty_expiry, condition, buy_from) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12,$13)`;
export const SELECT_ITEM_BY_ID = `SELECT * FROM inventory WHERE equipment_id = $1`;
export const SELECT_ITEM_BY_USER_ID = `SELECT * FROM inventory WHERE user_id = $1`;
export const UPDATE_ITEM_BY_ID = `UPDATE inventory SET status = $1, assigned_to = $2, location = $3, condition = $4 WHERE equipment_id = $5`;
export const DELETE_ITEM_BY_ID = `DELETE FROM inventory WHERE equipment_id = $1`;
export const MONTHLY_ITEMS = `SELECT price FROM inventory WHERE EXTRACT(MONTH FROM purchase_date) = $1 AND EXTRACT(YEAR FROM purchase_date) = $2;`;
export const SELECT_TOTAL = `SELECT * FROM inventory ORDER BY purchase_date, equipment_id ASC`;
