import { setKey, deleteKey, getKey } from "../lib/KeyManager.js";
import inquirer from "inquirer";
import colors from "colors";

export const key = {
  async set() {
    const questions = await inquirer.prompt([
      {
        type: "input",
        name: "APIkey",
        message: "Enter API Key".green + " https://nomics.com",
        validate: (input) => (input === "" ? "This value is required" : true),
      },
    ]);
    const ApiKey = setKey(questions.APIkey);
    if (ApiKey) {
      console.log("API-KEY Setted".blue);
    }
  },
  remove() {
    try {
      deleteKey();
      console.log("API-KEY Removed".blue);
    } catch (error) {
      console.error(error.message.red);
    }
  },
  show() {
    try {
      const Apikey = getKey();
      console.log("Current API-KEY: ", Apikey.yellow);
      return Apikey;
    } catch (error) {
      console.error(error.message.red);
    }
  },
};
