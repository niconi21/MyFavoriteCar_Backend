import { UserModel } from './user.schema';
import { PostTypeModel } from './postType.schema';
import {
  BelongsTo,
    BelongsToGetAssociationMixin,
    CreationOptional,
    InferAttributes,
    InferCreationAttributes,
    Model,
  } from "sequelize";
  
  export class PostModel extends Model<
    InferAttributes<PostModel, { omit: "createdAt" | "updatedAt" }>,
    InferCreationAttributes<PostModel, { omit: "createdAt" | "updatedAt" }>
  > {
    public id: CreationOptional<number>;
    public title: string;
    public description: string;
    
    public createdAt: CreationOptional<Date>;
    public updatedAt: CreationOptional<Date>;

    public getUser!: BelongsToGetAssociationMixin<UserModel>;
    public getType!: BelongsToGetAssociationMixin<PostTypeModel>;

  }
  