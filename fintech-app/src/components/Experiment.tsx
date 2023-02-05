import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { Avatar } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreateSavingsBtn = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Button variant="contained" size="large" fullWidth onClick={handleOpen}>
        Create a savings plan
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Box sx={style}>
          <Avatar
            alt="Remy Sharp"
            sx={{
              width: { xs: "30", sm: "30" },
              height: { xs: "30", sm: "30" },
              padding: "5px",
              background: "#6236ff",
              border: "1px solid #6236ff",
            }}
          >
            <SentimentDissatisfiedIcon />
          </Avatar>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Oops..
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            You are still not eligible.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default CreateSavingsBtn;
