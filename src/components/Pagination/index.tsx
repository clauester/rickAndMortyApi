import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface InfoProps {
  totalPages: number;
  nextUrl: string;
  count: number;
  prevUrl: string;
}

interface PagepaginationProps {
  handlePage: (event: React.ChangeEvent<unknown>, page: number) => void;
  pageInfo: InfoProps;
  actualPage: number;
}

const PagePagination = ({
  handlePage,
  pageInfo,
  actualPage,
}: PagepaginationProps) => {
  console.log(pageInfo);

  return (
    <Box display="flex" justifyContent="center">
      <Pagination
        count={pageInfo.totalPages}
        page={actualPage}
        variant="text"
        sx={{
          "& .Mui-selected": {
            backgroundColor: "transparent",
            fontWeight: "bold",
            color: "#74CB48",
          },
          "& .MuiPaginationItem-page:hover": {
            backgroundColor: "transparent",
          },
          "& .MuiPaginationItem-page": {
            fontSize: "16px",
          },
        }}
        onChange={handlePage}
      />
    </Box>
  );
};

export default PagePagination;
