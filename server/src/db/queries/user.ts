export const SELECT_ALL_USERS = `SELECT * FROM users ORDER BY created_date ASC`;
export const CREATE_NEW_USER = `INSERT INTO users(name, email, password, role, created_date, updated_date) VALUES($1, $2, $3, $4, $5, $6)`;
export const GET_USER_BY_ID = `SELECT * FROM users WHERE user_id = $1`;
export const UPDATE_USER_BY_ID = `UPDATE users SET name = $1, email = $2, password = $3, role = $4, updated_date = $5, is_active = $6 WHERE user_id = $7`;
export const DELETE_USER_BY_ID = `DELETE FROM users WHERE user_id = $1`;
