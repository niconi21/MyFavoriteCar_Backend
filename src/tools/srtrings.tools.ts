import { APP_ENVIROMENTS } from "../configs/app.enviroments";

export class StringsApp {
  public static prefixApi = "/api/v1";

  public static listenMessageSuccess = `Server on port ${APP_ENVIROMENTS.port}`;

  public static publicRoute = "/public";
  public static publicPath = "../public";
  public static publicMessageCreated = "Public directory created!";
}
