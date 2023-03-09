import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("https://mg-api-fu5l.onrender.com/account");
  // return axios.get("https://jellyamna.github.io/mtf.github.io/db.json");
};

export const useDataMg = (onSuccess, onError) => {
  return useQuery("data-mandiri", fetchSuperHeroes, {
    onError,
    onSuccess,
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
    // cacheTime: 1000,
    refetchOnWindowFocus: true,
  });
};
