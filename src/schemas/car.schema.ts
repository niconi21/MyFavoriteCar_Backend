import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

export class CarModel extends Model<
  InferAttributes<CarModel, { omit: "createdAt" | "updatedAt" }>,
  InferCreationAttributes<CarModel, { omit: "createdAt" | "updatedAt" }>
> {
  public id: CreationOptional<number>;
  public tradeMark: string;
  public model: number;
  public name: string;
  public description: string;
  public photo: CreationOptional<string> = "noImage.png";

  public createdAt: CreationOptional<Date>;
  public updatedAt: CreationOptional<Date>;
}
