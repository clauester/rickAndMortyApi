import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Card = (props: any) => {
  return (
    <Box
      component={Paper}
      elevation={6}
      sx={{
        borderRadius: "10px",
        width: "100%",
        padding: "0px",
        margin: "0px",
      }}
    >
      <Grid container minHeight="auto">
        {props.children}
      </Grid>
    </Box>
  );
};

export default Card;
