import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

export class PostTypeModel extends Model<
  InferAttributes<PostTypeModel, { omit: "createdAt" }>,
  InferCreationAttributes<PostTypeModel, { omit: "createdAt" }>
> {
  public id: CreationOptional<number>;
  public name: string;
  public createdAt: CreationOptional<Date>;
}
