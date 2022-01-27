import { DataTypes } from 'sequelize';

import sequelize from 'loaders/database';
import initStoreModel from './store';
import initStoreMenuModel from './store-menu';
import initStoreLocationModel from './store-location';
import syncModels from './sync-models';

const initFuncs = [initStoreModel, initStoreMenuModel, initStoreLocationModel];

initFuncs.forEach((func) => func(sequelize, DataTypes));

export const Store = sequelize.models.Store;
export const StoreLocation = sequelize.models.StoreLocation;
export const StoreMenu = sequelize.models.StoreMenu;

Store.Location = Store.hasOne(StoreLocation);

if (process.argv[2] === 'sync') {
	syncModels(sequelize);
}
