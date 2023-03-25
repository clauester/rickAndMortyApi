import { createContext, useState } from "react";

const ThemeContext = createContext<ThemeProps>({
  theme: "light",
  handleTheme: () => {},
});
interface ThemeProps {
  theme: "light" | "dark";
  handleTheme: () => void;
}

const initialTheme = "light";

const ContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<"light" | "dark">(initialTheme);
  const [flag, setFlag] = useState(false);

  const handleTheme = () => {
    setFlag(!flag);
    flag ? setTheme("light") : setTheme("dark");
  };

  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
export { ContextProvider };
export default ThemeContext;
