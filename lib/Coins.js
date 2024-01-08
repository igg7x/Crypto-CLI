import Configstore from "configstore";
import { getAllCoins } from "./CryptoAPI.js";

const conf = new Configstore("coin-cli");
getAllCoins().then((data) => {
  conf.set("data", data);
});

const setCoins = async () => {
  const data = conf.get("data");
  if (!data) {
    console.error("No Coins Found".red);
  }
  const coins = [];
  for (let i = 0; i < data.length; i++) {
    data[i].length == 6
      ? coins.push(data[i].substring(0, 3))
      : data[i].length == 7
      ? coins.push(data[i].substring(0, 4))
      : coins.push(data[i].substring(0, 5));
  }
  const set = new Set(coins);
  const uniqueCoins = [...set];
  conf.set("coins", uniqueCoins);
};
setCoins();

export const getCoins = () => {
  const coins = conf.get("coins");
  if (!coins) {
    throw new Error("No Coins Found");
  }
  return coins;
};

export const getExchanges = () => {
  const exchanges = conf.get("data");
  if (!exchanges) {
    console.error("No Exchanges Found".red);
  }
  return exchanges;
};
