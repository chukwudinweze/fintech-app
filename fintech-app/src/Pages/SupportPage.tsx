import { Avatar, Link, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BottomNav from "../components/BottomNav/BottomNav";
import PageHeader from "../Global/PageHeader";
import chatImg from "../assets/chat.png";
import emailImg from "../assets/email.png";
import phoneCall from "../assets/phone-call.png";
import { motion } from "framer-motion";

const SupportPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box>
        <PageHeader label="" color="#fff" backgroundColor="#6236ff" />
        <Box
          bgcolor="#fff"
          sx={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              margin: { xs: "", sm: "0 250px" },
              marginTop: "40px",
              padding: { xs: "25px", sm: "60px" },
            }}
          >
            <Stack spacing={3}>
              <Typography
                variant="h5"
                component="h5"
                fontWeight={700}
                textAlign="center"
              >
                Get Our Support
              </Typography>
              <Typography>
                You can count on our team of highnly skilled customer experience
                service experts who take personal pride in giving top notch
                service to each and every customer.
              </Typography>
              <Typography>
                Please note, we are able to respond much faster during our
                normal support hours of 5am-5pm West African Time(WAT), Monday
                through Friday, except Nigeria Holidays.
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                textAlign="center"
              >
                <Link
                  href="https://api.whatsapp.com/send?phone=08060281867"
                  sx={{ textDecoration: "none" }}
                >
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    spacing={{ xs: 2, sm: 4 }}
                    bgcolor="#ededf5"
                    width={{ xs: "100px", sm: "150px", lg: "200px" }}
                    padding="30px 0"
                    borderRadius="6px"
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={chatImg}
                      sx={{
                        width: { xs: "65px", sm: "85px" },
                        height: { xs: "65px", sm: "85px" },
                        padding: { xs: "15px", sm: "25px" },
                        background: "#1dcc70",
                      }}
                    />
                    <Typography fontWeight={700} textAlign="center">
                      Chat
                    </Typography>
                  </Stack>
                </Link>
                <Link
                  href="mailto:chukwudinwez@gmail.com"
                  sx={{ textDecoration: "none" }}
                >
                  <Stack
                    width={{ xs: "100px", sm: "150px", lg: "200px" }}
                    padding="30px 0"
                    justifyContent="center"
                    alignItems="center"
                    spacing={{ xs: 2, sm: 4 }}
                    bgcolor="#ededf5"
                    borderRadius="6px"
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={emailImg}
                      sx={{
                        width: { xs: "65px", sm: "85px" },
                        height: { xs: "65px", sm: "85px" },
                        padding: { xs: "15px", sm: "25px" },
                        background: "#6236ff",
                      }}
                    />
                    <Typography fontWeight={700} textAlign="center">
                      Email
                    </Typography>
                  </Stack>
                </Link>
                <Link sx={{ textDecoration: "none" }} href="tel:+2348072902868">
                  <Stack
                    width={{ xs: "100px", sm: "150px", lg: "200px" }}
                    justifyContent="center"
                    alignItems="center"
                    spacing={{ xs: 2, sm: 4 }}
                    bgcolor="#ededf5"
                    padding="30px 0"
                    borderRadius="6px"
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={phoneCall}
                      sx={{
                        width: { xs: "65px", sm: "85px" },
                        height: { xs: "65px", sm: "85px" },
                        padding: { xs: "15px", sm: "25px" },
                        background: "#ff396f",
                      }}
                    />
                    <Typography fontWeight={700}>SMS</Typography>
                  </Stack>
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <BottomNav />
      </Box>
    </motion.div>
  );
};

export default SupportPage;
