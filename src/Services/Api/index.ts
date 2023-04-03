import axios from "axios";
interface GlobalFilter {
  type: string;
  value: string;
}
export const getCharacters = async (name: string, global: GlobalFilter[]) => {
  let data2 = "";
  global.map((data) => {
    data2 = data2 + `&${data.type}=${data.value}`;
  });
  const data = `/?name=${name}${data2}`;
  console.log(data2);
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character${data}`
  );
  return response;
};
