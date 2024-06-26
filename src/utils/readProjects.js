import fs from "fs";
import path from "path";

const root = process.cwd();

const readProjectFiles = (fileName) =>
  fs.readFileSync(path.join(root, "src", "projects", fileName), "utf8");

export default readProjectFiles;
