import { Router } from "express";
import { createNewItem, getAllInventory, getItemByID } from "../controllers/inventory.controler";

const inventoryRouter = Router();

inventoryRouter.route('/').get(getAllInventory).post(createNewItem);
inventoryRouter.route('/:id').get(getItemByID);

export {inventoryRouter};