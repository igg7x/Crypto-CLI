import { getCoins, getExchanges } from "../lib/Coins.js";
export const see = {
  coins: () => {
    const data = getCoins();
    data.forEach((coin) => {
      process.stdout.write(coin + ",");
    });
  },
  exchanges: () => {
    console.table(getExchanges());
  },
};
