import { Avatar, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const Profile = () => {
  return (
    <Avatar
      sx={{
        bgcolor: deepPurple[900],
        height: 20,
        width: 20,
        padding: "18px",
      }}
      alt="Remy Sharp"
      src="/broken-image.jpg"
    >
      <Typography variant="h6" sx={{ fontSize: "16px" }}>
        NC
      </Typography>
    </Avatar>
  );
};

export default Profile;
