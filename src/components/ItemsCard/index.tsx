import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Grid } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Box from "@mui/material/Box";
import { colorStatus } from "../../utils/constans/Index";

const ItemCard = ({ data }: any) => {
  const getColorStatus = (status: string) => {
    return colorStatus[status as keyof typeof colorStatus];
  };
  return (
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
            marginTop: "15px",
            display: "grid",
            justifyContent: "center",
            flex: 1,
            height: "250px",
          }}
        >
          <LazyLoadImage
            src={data.image}
            effect="blur"
            alt={"imgen"}
            width={160}
            height={160}
            style={{
              borderRadius: "160px",
              borderColor: getColorStatus(data.status),
              borderWidth: "5px",
              borderStyle: "solid",
            }}
          />

          <Box width="auto">
            <Typography
              sx={{
                width: "160px",
                wordWrap: "break-word",
                marginBottom: "5px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
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
          <Typography variant="body1" color="common.white" textAlign="center">
            {data.status}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
