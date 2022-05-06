import { PostModel } from './post.schema';
import { CarModel } from './car.schema';
import {
  Association,
  BelongsTo,
  BelongsToManyAddAssociationMixin,
  BelongsToManyGetAssociationsMixin,
  BelongsToManySetAssociationsMixin,
  CreationOptional,
  HasManyGetAssociationsMixin,
  HasManySetAssociationsMixin,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
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

  declare getPosts: HasManyGetAssociationsMixin<PostModel>;
  declare getFavoriteCars: BelongsToManyGetAssociationsMixin<CarModel>;
  declare getFriends: BelongsToManyGetAssociationsMixin<UserModel>;

  declare setFavoriteCar: BelongsToManySetAssociationsMixin<CarModel, CarModel>

  declare myFriends?: NonAttribute<UserModel[]>;
  declare myPosts?: NonAttribute<PostModel[]>;
  declare FavoriteCar?: NonAttribute<CarModel[]>;

  declare static associations: {
    FavoriteCar:Association<UserModel, CarModel>;
  };
}
