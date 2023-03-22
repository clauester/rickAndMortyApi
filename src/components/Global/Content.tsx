//max width 1200px, padding-left/right 20px, margin auto 0

import Box from "@mui/material/Box";

const Content = (props: any) => {
  return (
    <Box
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "auto 0",
      }}
    >
      {props.children}
    </Box>
  );
};

export default Content;
