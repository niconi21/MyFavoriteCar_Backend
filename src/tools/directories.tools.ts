import { existsSync, mkdirSync, rmSync } from "fs";

export class DirectoriesTools {
  public static createDir(path: string) {
    if (!existsSync(path)) {
      mkdirSync(path, { recursive: true });
    }
  }

  public static existsDir(path: string): boolean {
    return existsSync(path);
  }
}
