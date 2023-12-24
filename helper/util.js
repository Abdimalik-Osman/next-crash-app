import { promises as fs } from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(),'/helper/data.json')
// read data from JSON file using file system of node js.
export const readData = async()=>{
    const jsonData = await fs.readFile(dataFilePath, 'utf8');
    return JSON.parse(jsonData)
}