import {
    CreationOptional,
    InferAttributes,
    InferCreationAttributes,
    Model,
  } from "sequelize";
  
  export class MultimediaModel extends Model<
    InferAttributes<MultimediaModel, { omit: "createdAt" }>,
    InferCreationAttributes<MultimediaModel, { omit: "createdAt" }>
  > {
    public id: CreationOptional<number>;
    public resource: string;
    public description: CreationOptional<string>;
    public createdAt: CreationOptional<Date>;
  }
  