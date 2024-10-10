import { isUUID } from 'validator';

export const validateID = (id: string) => {
    return isUUID(id);
  };

export const findById =  (rowCount: number|null ) => {

return rowCount === 0 ? false : true;
} 