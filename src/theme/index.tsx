import { createTheme } from "@mui/material/styles";
import { useState } from "react";

export const changeTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#1D212C",
            },
            background: {
              default: "#ECECEC",
              paper: "#fff",
            },
            text: {
              primary: "#1D212C",
              secondary: "rgba(0, 0, 0, 0.6)",
              disabled: "rgba(0, 0, 0, 0.38)",
            },
            action: {
              active: "rgba(0, 0, 0, 0.54)",
              hover: "rgba(0, 0, 0, 0.04)",
              selected: "rgba(0, 0, 0, 0.08)",
              disabled: "rgba(0, 0, 0, 0.26)",
              disabledBackground: "rgba(0, 0, 0, 0.12)",
            },
            divider: "rgba(0, 0, 0, 0.12)",
          }
        : {
            primary: {
              main: "#fff",
            },
            background: {
              default: "rgba(51, 58, 61, 0.9)",
              paper: "#50595C",
            },
            text: {
              primary: "#fff",
              secondary: "rgba(255, 255, 255, 0.6)",
              disabled: "rgba(255, 255, 255, 0.38)",
            },
            action: {
              active: "rgba(255, 255, 255, 0.54)",
              hover: "rgba(255, 255, 255, 0.04)",
              selected: "rgba(255, 255, 255, 0.08)",
              disabled: "rgba(255, 255, 255, 0.26)",
              disabledBackground: "rgba(255, 255, 255, 0.12)",
            },
            divider: "rgba(255, 255, 255, 0.12)",
          }),
    },
    typography: {
      fontFamily: "Poppins",
      h1: {
        fontSize: "64px",
      },
      h2: {
        fontSize: "42px",
      },
      h3: {
        fontSize: "36px",
      },
      h4: {
        fontSize: "32px",
      },
      h5: {
        fontSize: "28px",
      },
      h6: {
        fontSize: "24px",
      },
      body1: {
        fontSize: "16px",
      },
    },
  });
