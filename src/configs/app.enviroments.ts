export const APP_ENVIROMENTS = {
  port: process.env.PORT || "3000",
  salt: parseInt(process.env.SALT || "10"),
  token_secret: process.env.TOKEN_SECRET || "Ella_No_Te_Ama_XD",
  token_expiresIn: process.env.TOKEN_EXPIRES_IN || "7d",
};

export const DB_ENVIROMETS = {
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "nodeisjs",
  port: parseInt(process.env.DB_PORT || '3306'),
  database: process.env.DB_DATABASE || "MyFavoriteCarDB",
};
