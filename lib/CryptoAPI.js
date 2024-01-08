import axios from "axios";

export const getPriceData = async (coinOption = "btc", curOption = "usd") => {
  try {
    const data = await axios.get(
      `https://api.gemini.com/v1/pubticker/${coinOption}${curOption}`
    );
    return [
      data.data.last,
      data.data.volume[coinOption.toUpperCase()],
      Object.keys(data.data.volume)[0],
      Object.keys(data.data.volume)[1],
    ];
  } catch (error) {
    handleErrors(error);
  }
};

export const getAllCoins = async () => {
  try {
    const data = await axios.get("https://api.gemini.com/v1/symbols");
    return data.data;
  } catch (error) {
    handleErrors(error);
  }
};

const handleErrors = (err) => {
  if (err.response.status === 401) {
    console.error("Your API key is invalid".red);
  } else if (err.response.status === 400) {
    console.error("Bad Request,check the coin or the currency".red);
  } else {
    console.error("Something is not working".red);
  }
};
