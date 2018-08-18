import path from 'path';
import * as fs from "fs";

class Store {

  constructor() {
    this.data = {};
    this.readData();
  }

  readData() {
    const basePath = path.join(__dirname,'../resources');
    fs.readdir(basePath, (err, files) => {
      files.forEach(file => {
        fs.readFile(path.join(basePath, file), 'utf8', (err, data) => {
          Object.assign(this.data, JSON.parse(data));
        });
      });
    })
  }

  getData(namespace) {
    const res = this.data[namespace];
    if (!res) throw Error(`${namespace} does not exist in store`);
    return res;
  }

  setData(data, namespace) {
    Object.assign(this.data, {[namespace]: data});
  }
}

const singleStore  = new Store();

export default singleStore;