import Configstore from "configstore";
import fs from "fs";
const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf8"));

const conf = new Configstore(packageJson.name);

export const setKey = (key) => {
  conf.set("apiKey", key);
  return key;
};

export const getKey = () => {
  const key = conf.get("apiKey");
  if (!key) {
    throw new Error("No API Key Found - Get a key at https://nomics.com");
  }
  return key;
};

export const deleteKey = () => {
  const key = conf.get("apiKey");
  if (!key) {
    throw new Error("No API Key Found - Get a key at https://nomics.com");
  }
  conf.delete("apiKey");
};
