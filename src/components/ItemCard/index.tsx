import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Grid } from "@mui/material";

const ItemCard = ({ characters }: any) => {
  console.log(characters);
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridColumnGap: "25px",
        gridRowGap: "30px",
        padding: "30px 0px 0px 0px",
        //flexGrow: 1,
        //width: "100%",
      }}
    >
      {characters.map((data: any) => (
        <Card
          key={data.id}
          sx={{
            borderRadius: "10px",
            // width: "100%",
            textAlign: "center",
            // height: "100%",
            // background: "gray",
            //display: "flex",
            // flexDirection: "column",
            // justifyContent: "flex-end",
          }}
        >
          <CardActionArea sx={{ height: "100%" }}>
            <Grid
              sx={{
                // marginTop: "15px",
                display: "grid",
                justifyContent: "center",
                flex: 1,
                height: "250px",
              }}
            >
              <Avatar
                src={data.image}
                sx={{
                  width: "160px",
                  height: "160px",
                  borderColor: "green",
                  borderWidth: "5px",
                  borderStyle: "solid",
                  margin: "10px",
                }}
              />

              <Box margin="0px 10px" width="150px">
                <Typography
                  sx={{
                    wordWrap: "break-word",
                    //width: "150px",
                    marginBottom: "5px",
                  }}
                  variant="body1"
                >
                  {data.name}
                </Typography>
                <Typography variant="body2" mb="5px">
                  {data.species} | {data.gender}
                </Typography>
              </Box>
            </Grid>
            <CardContent
              sx={{
                background: "green",
                padding: "0px",
                height: "30px",

                //  alignSelf: "flex-end",
              }}
            >
              <Typography variant="body1" color="common.white">
                {data.status}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default ItemCard;
