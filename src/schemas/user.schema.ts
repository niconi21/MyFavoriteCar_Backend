import { PostModel } from "./post.schema";
import { CarModel } from "./car.schema";
import {
  BelongsToManyAddAssociationMixin,
  BelongsToManyAddAssociationsMixin,
  BelongsToManyCreateAssociationMixin,
  BelongsToManyGetAssociationsMixin,
  BelongsToManyRemoveAssociationMixin,
  CreationOptional,
  HasManyAddAssociationMixin,
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

  public getFavoritesCars!: BelongsToManyGetAssociationsMixin<CarModel>;
  public getFriends!: BelongsToManyGetAssociationsMixin<UserModel>;
  public getPosts!: BelongsToManyGetAssociationsMixin<PostModel>;

  public addFavoritesCar!: BelongsToManyAddAssociationMixin<CarModel, number>;
  public addFriend!: BelongsToManyAddAssociationMixin<UserModel, number>;
  public addPost!: HasManyAddAssociationMixin<PostModel, number>;

  public createFavoritesCar!: BelongsToManyCreateAssociationMixin<CarModel>;
  public createFriend!: BelongsToManyCreateAssociationMixin<UserModel>;
  public createPost!: BelongsToManyCreateAssociationMixin<PostModel>;

  public removeFavoritesCar!: BelongsToManyRemoveAssociationMixin<CarModel, number>;
  public removeFriend!: BelongsToManyRemoveAssociationMixin<UserModel, number>;
  public removePost!: BelongsToManyRemoveAssociationMixin<PostModel, number>;

  
}
