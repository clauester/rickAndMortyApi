//max width 1200px, padding-left/right 20px, margin auto 0

import Box from "@mui/material/Box";
import { PropsWithChildren } from "react";

const Content = (props: any) => {
  return (
    <Box
      sx={{
        paddingTop: props.pt || "20px",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingBottom: "20px",
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
