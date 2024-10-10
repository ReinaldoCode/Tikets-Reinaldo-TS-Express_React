import { Router } from "express";
import { createNewItem, getAllInventory, getItemByID, getItemByUserID } from "../controllers/inventory.controler";

const inventoryRouter = Router();

inventoryRouter.route('/').get(getAllInventory).post(createNewItem);
inventoryRouter.route('/:id').get(getItemByID);
inventoryRouter.route("/user/:id").get(getItemByUserID)


export {inventoryRouter};