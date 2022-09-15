import { api } from "../libs/axios";
import { useQuery } from "@tanstack/react-query";

interface Game {
  id: string;
  bannerUrl: string;
  title: string;
  _count: {
    ads: number;
  };
}

export const getGames = async () => {
  try {
    const response = await api.get<Game[]>("/games");
    const games = response.data;

    return games;
  } catch (error) {
    console.log(error);
  }
};

export const useGames = () => useQuery(["games"], async () => await getGames());
