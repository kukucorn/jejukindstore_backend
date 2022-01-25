import sequelize from '../loaders/database';
import { DataTypes } from 'sequelize';
import initStoreModel from './store';

initStoreModel(sequelize, DataTypes);

export const Store = sequelize.models.Store;
