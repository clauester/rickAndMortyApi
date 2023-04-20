import { useEffect, useState } from "react";
import { routes } from "../../Routes/Routes";
import i18n from "../../config/i18n";

export const navbar_pages = [
  { name: i18n.t("navbar.characters"), link: routes.navbar.characters.path },
  { name: i18n.t("navbar.locations"), link: routes.navbar.locations.path },
  { name: i18n.t("navbar.episodes"), link: routes.navbar.episodes.path },
  {
    name: `${i18n.t("navbar.favoriteCharacters")}: `,
    link: routes.navbar.favorites.path,
  },
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
export const colorStatus = {
  Alive: "#74CB48",
  Dead: "#B91C1C",
  unknown: "#A2A2A2",
};
