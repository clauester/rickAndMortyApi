import { routes } from "../../Routes/Routes";

const navbar_pages = [
  { name: "Charactes", link: routes.navbar.characters.path },
  { name: "Locations", link: routes.navbar.locations.path },
  { name: "Episodes", link: routes.navbar.episodes.path },
  { name: "My favorites characters: ", link: routes.navbar.favorites.path },
];

export { navbar_pages };
