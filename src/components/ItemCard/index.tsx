import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Grid } from "@mui/material";
import { colorStatus } from "../../utils/constans/Index";

const ItemCard = ({ characters }: any) => {

  const getColorStatus = (status: string) => {
    return colorStatus[status as keyof typeof colorStatus];
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridColumnGap: "25px",
        gridRowGap: "30px",
        padding: "30px 0px 0px 0px",
      }}
    >
      {characters.map((data: any) => (
        <Card
          key={data.id}
          sx={{
            borderRadius: "10px",

            textAlign: "center",
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
                  borderColor: getColorStatus(data.status),
                  borderWidth: "5px",
                  borderStyle: "solid",
                  margin: "10px",
                }}
              />

              <Box margin="0px 10px" width="150px">
                <Typography
                  sx={{
                    wordWrap: "break-word",
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
                background: getColorStatus(data.status),
                padding: "0px",
                height: "30px",
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
