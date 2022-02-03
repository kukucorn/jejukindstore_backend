import { DataTypes } from 'sequelize';

import sequelize from 'loaders/database';
import initStoreModel from './store';
import initStoreMenuModel from './store-menu';
import initStoreLocationModel from './store-location';
import initUserModel from './user';
import initCommentModel from './comment';
import syncModels from './sync-models';

const initFuncs = [initStoreModel, initStoreMenuModel, initStoreLocationModel, initUserModel, initCommentModel];

initFuncs.forEach((func) => func(sequelize, DataTypes));

export const Store = sequelize.models.Store;
export const StoreLocation = sequelize.models.StoreLocation;
export const StoreMenu = sequelize.models.StoreMenu;
export const User = sequelize.models.User;
export const Comment = sequelize.models.Comment;

Store.Location = Store.hasOne(StoreLocation, { as: 'store_location', foreignKey: 'storeId' });
Store.Menu = Store.hasMany(StoreMenu, { as: 'store_menu', foreignKey: 'storeId' });
User.Comment = User.hasMany(Comment, { as: 'comment', foreignKey: 'userId' });
Store.Comment = Store.hasMany(Comment, { as: 'comment', foreignKey: 'storeId' });

if (process.argv[2] === 'sync') {
	syncModels(sequelize);
}
