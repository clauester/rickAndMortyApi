import { createContext, useState } from "react";

interface FavoriteCharactersProps {
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
  gender: string;
  origin: string;
  location: string;
  favorite: boolean;
}
interface FavoritesContextProps {
  favorites: FavoriteCharactersProps[];
  handleFavorites: (favs: FavoriteCharactersProps[]) => void;
}

const FavoritesContext = createContext<FavoritesContextProps>({
  favorites: [],
  handleFavorites: () => {},
});

const initialFavorites = (): FavoriteCharactersProps[] => {
  const store = localStorage.getItem("favorites");
  if (store) {
    console.log("initial: ", store);
    return JSON.parse(store);
  } else {
    return JSON.parse("{}");
  }
};

const FavContextProvider = ({ children }: any) => {
  const [favorites, setFavorites] =
    useState<FavoriteCharactersProps[]>(initialFavorites);

  const handleFavorites = (value: FavoriteCharactersProps[]) =>
    setFavorites(value);

  const data = { favorites, handleFavorites };

  return (
    <FavoritesContext.Provider value={data}>
      {children}
    </FavoritesContext.Provider>
  );
};
export { FavContextProvider };
export default FavoritesContext;
