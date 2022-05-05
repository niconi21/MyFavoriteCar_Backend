import { DataTypes, Sequelize } from "sequelize";
import { DB_ENVIROMETS } from "./app.enviroments";
import { UserModel } from "../schemas/user.schema";
import { StringsDB } from "../tools/srtrings.tools";
import { CarModel } from "../schemas/car.schema";
import { PostModel } from "../schemas/post.schema";
import { PostTypeModel } from "../schemas/postType.schema";
import { MultimediaModel } from "../schemas/multimedia.shcema";

export const sequelize = new Sequelize({
  dialect: "mysql",
  host: DB_ENVIROMETS.host,
  username: DB_ENVIROMETS.username,
  password: DB_ENVIROMETS.password,
  port: DB_ENVIROMETS.port,
  database: DB_ENVIROMETS.database,
});

PostTypeModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: { msg: "Es requerido el nombre" } },
    },
  },
  {
    sequelize,
    tableName: StringsDB.postTypeTableName,
    timestamps: true,
  }
);

MultimediaModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    resource: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: { msg: "Es requerido el nombre del archivo" } },
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: StringsDB.multimediaTableName,
    timestamps: true,
  }
);

UserModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: { msg: "Es requerido el nombre" } },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { notNull: { msg: "Es requerido el correo electrónico" } },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: { msg: "Es requerida la contraseña" } },
    },
    description: { type: DataTypes.STRING },
    age: {
      type: DataTypes.TINYINT,
      validate: { min: 17, max: 110 },
      defaultValue: 17,
    },
    isVerified: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  { sequelize, tableName: StringsDB.userTableName, timestamps: true }
);

CarModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tradeMark: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: { msg: "Es requerida la marca" } },
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: { msg: "Es requerido el modelo" } },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: { msg: "Es requerido el nombre del modelo" } },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: { msg: "Es requerida la descripción" } },
    },
    photo: { type: DataTypes.STRING, defaultValue: "noImage.png" },
  },
  { sequelize, tableName: StringsDB.carTableName, timestamps: true }
);

PostModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: { msg: "Es requerido el títilo" } },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: { msg: "Es requerido el títilo" } },
    },
  },
  { sequelize, tableName: StringsDB.postTableName, timestamps: true }
);
