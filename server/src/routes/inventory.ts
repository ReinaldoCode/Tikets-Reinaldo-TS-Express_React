import { Router } from 'express';
import {
  createNewItem,
  deleteItemByID,
  getAllInventory,
  getBuyFrom,
  getItemByID,
  getItemByUserID,
  updateItemByID,
} from '../controllers/inventory.controler';

const inventoryRouter = Router();

inventoryRouter.route('/').get(getAllInventory).post(createNewItem);
inventoryRouter.route('/buy-from').get(getBuyFrom);
inventoryRouter
  .route('/:id')
  .get(getItemByID)
  .delete(deleteItemByID)
  .patch(updateItemByID);
inventoryRouter.route('/user/:id').get(getItemByUserID);

export { inventoryRouter };
