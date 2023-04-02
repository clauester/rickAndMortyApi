import { routes } from "../../Routes/Routes";

export const navbar_pages = [
  { name: "Charactes", link: routes.navbar.characters.path },
  { name: "Locations", link: routes.navbar.locations.path },
  { name: "Episodes", link: routes.navbar.episodes.path },
  { name: "My favorites characters: ", link: routes.navbar.favorites.path },
];

export const filter = {
  status: {
    title: "status",
    data: ["Alive", "Dead", "Unknow"],
  },
  species: {
    title: "species",
    data: ["Human", "Robot", "Unknow"],
  },
  gender: {
    title: "gender",
    data: ["Male", "Female"],
  },
};
