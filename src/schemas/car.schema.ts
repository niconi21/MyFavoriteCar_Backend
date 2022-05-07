import { UserModel } from './user.schema';
import { MultimediaModel } from './multimedia.shcema';
import {
  BelongsToManyCreateAssociationMixin,
  BelongsToManyGetAssociationsMixin,
  BelongsToManyRemoveAssociationMixin,
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

  
  public getCarMultimedias!: BelongsToManyGetAssociationsMixin<MultimediaModel>;

  public createCarMultimedia!: BelongsToManyCreateAssociationMixin<MultimediaModel>

  public removeCarMultimedia!: BelongsToManyRemoveAssociationMixin<MultimediaModel, number>;


}
