import { resolve } from "path";
import express, { Application } from "express";
import cors from "cors";
import { APP_ENVIROMENTS } from "./app.enviroments";
import { APP_ROUTES } from "./app.routes";
import { green, magenta } from "colors";
import { DirectoriesTools } from "../tools/directories.tools";
import { StringsApp } from '../tools/srtrings.tools';
export class App {
  private _app: Application;
  private _port: string = APP_ENVIROMENTS.port;

  constructor() {
    this._app = express();
    this._createPublicDir();
    this._middlewares();
  }

  private _middlewares() {
    this._app.use(cors());
    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: false }));
    this._app.use(StringsApp.publicRoute, express.static(resolve(__dirname, StringsApp.publicPath)));
    this._app.use(StringsApp.prefixApi, APP_ROUTES);
  }

  private _createPublicDir() {
    let publicPath = resolve(__dirname, StringsApp.publicPath);
    if (!DirectoriesTools.existsDir(publicPath)) {
      DirectoriesTools.createDir(publicPath);
      console.log(green(StringsApp.publicMessageCreated));
    }
  }

  public listen() {
    this._app.listen(this._port, () => {
      console.log(magenta(StringsApp.listenMessageSuccess));
    });
  }
}
