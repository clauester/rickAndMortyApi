import axios from "axios";

export const getCharacters = async () => {
  return await axios.get("https://rickandmortyapi.com/api/character");
};
