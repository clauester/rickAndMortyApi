import Box from "@mui/material/Box";

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
      width={{ xs: "100%", sm: "100%", lg: "80%" }}
    >
      {props.children}
    </Box>
  );
};

export default Content;
