import Box from "@mui/material/Box";

/* A function that returns a Box component. */
const Content = (props: any) => {
  return (
    <Box
      sx={{
        padding: "20px",
        maxWidth: "1500px",
        margin: "0 auto",
      }}
      width={{ xs: "100%", lg: "80%" }}
    >
      {props.children}
    </Box>
  );
};

export default Content;
