import { resolve } from "path";
import express, { Application } from "express";
import cors from "cors";
import { APP_ENVIROMENTS } from "./app.enviroments";
import { APP_ROUTES } from "./app.routes";
import { green, magenta, red } from "colors";
import { DirectoriesTools } from "../tools/directories.tools";
import { StringsApp } from "../tools/srtrings.tools";
import { sequelize } from "./app.database";
import { UserModel } from "../schemas/user.schema";
import { CarModel } from "../schemas/car.schema";
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
    this._app.use(
      StringsApp.publicRoute,
      express.static(resolve(__dirname, StringsApp.publicPath))
    );
    this._app.use(StringsApp.prefixApi, APP_ROUTES);
  }

  private _createPublicDir() {
    let publicPath = resolve(__dirname, StringsApp.publicPath);
    if (!DirectoriesTools.existsDir(publicPath)) {
      DirectoriesTools.createDir(publicPath);
      console.log(green(StringsApp.publicMessageCreated));
    }
  }

  private async _connectedDB() {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log(magenta(StringsApp.dbMessageConnected));
    this._prubasDB();
  }

  private async _prubasDB() {
    // let user = new UserModel({
    //   name: "Nicolas Moreno Durán",
    //   email: "morenodurann@gmail.com",
    //   password: "nodeisjs",
    //   age: 21,
    //   description: "holis",
    // });
    // await user.save();
    // await CarModel.bulkCreate([
    //   {
    //     tradeMark: "audi",
    //     model: 2018,
    //     name: "R8",
    //     description: "v6 32v 320hp",
    //   },
    //   {
    //     tradeMark: "mazda",
    //     model: 2017,
    //     name: "mazda 3",
    //     description: "v4 16v 210hp",
    //   },
    //   {
    //     tradeMark: "hyundai",
    //     model: 2014,
    //     name: "I10",
    //     description: "4 en linea, 12v 74hp",
    //   },

    // ]);
    let user = await UserModel.findByPk(1);
    
    console.log(user?.get())
  }

  public async listen() {
    try {
      await this._connectedDB();
      this._app.listen(this._port, () => {
        console.log(magenta(StringsApp.listenMessageSuccess));
      });
    } catch (error) {
      console.log(red(StringsApp.dbMessageError));
    }
  }
}
