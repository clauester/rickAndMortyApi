//max width 1200px, padding-left/right 20px, margin auto 0

import Box from "@mui/material/Box";

const Content = (props: any) => {
  return (
    <Box
      sx={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
      width={{ xs: "100%", lg: "80%" }}
    >
      {props.children}
    </Box>
  );
};

export default Content;
