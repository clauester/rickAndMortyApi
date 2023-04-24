import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PropsWithChildren, useState } from "react";
import Card from "../Card";
import Filter from "../Filter/Index";
import Content from "../Content/Index";
import ClearIcon from "@mui/icons-material/Clear";

interface CustomModalProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const CustomModal = ({ open, handleClose, children }: CustomModalProps) => {
  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        disableScrollLock={false}
        sx={{ overflow: "scroll" }}
      >
        <Box>
          <Content pt="132px">
            <Card>
              <ClearIcon
                sx={{
                  height: "35px",
                  width: "35px",
                  position: "absolute",
                  //   left: "150px",
                  top: "20px",
                  right: "20px",
                }}
                onClick={handleClose}
              />

              {children}
            </Card>
          </Content>
        </Box>
      </Modal>
    </Box>
  );
};

export default CustomModal;
