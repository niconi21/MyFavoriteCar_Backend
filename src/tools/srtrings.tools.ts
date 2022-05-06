import { APP_ENVIROMENTS, DB_ENVIROMETS } from "../configs/app.enviroments";

export class StringsApp {
  public static prefixApi = "/api/v1";
  
  public static listenMessageSuccess = `Server on port ${APP_ENVIROMENTS.port}`;
  
  public static dbMessageConnected = `Data Base ${DB_ENVIROMETS.database} connected!`;
  public static dbMessageError = "Data Base no connected";

  public static publicRoute = "/public";
  public static publicPath = "../public";
  public static publicMessageCreated = "Public directory created!";
}

export class StringsDB{
  public static userTableName = 'User';
  public static carTableName = 'Car';
  public static postTableName = 'Post';
  public static postTypeTableName = 'PostType';
  public static multimediaTableName = 'Multimedia';
  public static favoriteCarTableName = "FavoriteCar";
  public static friendsTableName = "Friends";
  public static CarMultimediaTableName = "CarMultimedia";
  public static postMultimediaTableName = "PostMultimedia";

  public static userForeignKeyName = 'userId';
  public static friendForeignKeyName = 'friendId';
  public static carForeignKeyName = 'carId';
  public static multimediaForeignKeyName = 'multimediaId';
  public static postForeignKeyName = 'postId';
  public static postTypeForeignKeyName = 'typeId';
}
