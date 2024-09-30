export const SELECT_ALL_USERS = `SELECT * FROM users ORDER BY created_date ASC`;
export const CREATE_NEW_USER = `INSERT INTO users(name, email, password, role, created_date, updated_date) VALUES($1, $2, $3, $4, $5, $6)`;
export const UPDATE_USER_BY_ID=``;