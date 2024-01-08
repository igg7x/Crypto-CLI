import { getPriceData } from "../lib/CryptoAPI.js";
import colors from "colors";
export const check = {
  price: async (cmd) => {
    const coinPrice = await getPriceData(cmd.coin, cmd.cur);
    if (coinPrice) {
      console.log(
        "COIN: ".yellow,
        `${coinPrice[2]}` + " |   " + "PRICE:".blue,
        `${coinPrice[0]} ${coinPrice[3]}`
      );
    }
  },
};
