import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

export class UserModel extends Model<
  InferAttributes<UserModel, { omit: "createdAt" | "updatedAt" }>,
  InferCreationAttributes<UserModel, { omit: "createdAt" | "updatedAt" }>
> {
  public id: CreationOptional<number>;
  public name: string;
  public email: string;
  public password: string;
  public description: string;
  public age: number;
  public isVerified: CreationOptional<boolean> = false;

  public createdAt: CreationOptional<Date>;
  public updatedAt: CreationOptional<Date>;
}
