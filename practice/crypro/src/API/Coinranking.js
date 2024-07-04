import axios from "axios";

const apiKey = import.meta.env.VITE_COINRANKING_API_KEY;
console.log(apiKey);

export const getAllCoinsFromAPI = async () => {
  const response = await axios.get("https://api.coinranking.com/v2/coins", {
    config: {
      headers: {
        "x-access-token": apiKey,
      },
    },
  });

  console.log(response);

  return response.data.data.coins;
};
