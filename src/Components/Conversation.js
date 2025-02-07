import { Faker, faker } from "@faker-js/faker";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Fab,
  IconButton,
  InputAdornment,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import {
  CaretDown,
  Link,
  MagnifyingGlass,
  PaperPlaneTilt,
  Phone,
  Smiley,
  VideoCamera,
} from "phosphor-react";
import React from "react";
import { Actions, Chat_History } from "../Data/Data";
import {
  Docmsg,
  Imgmsg,
  Linkmsg,
  Replymsg,
  Textmsg,
  Timeline,
} from "./MsgType";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));
const Conversation = () => {
  const theme = useTheme();
  const [openPiker, setOpenPiker] = React.useState(false);
  const [openActions, setOpenActions] = React.useState(false);

  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      <Box
        p={2}
        sx={{
          width: "100%",
          backgroundColor: "#F8FAFF",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack
          alignItems={"center"}
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ height: "100%", width: "100%" }}
        >
          <Stack direction={"row"} spacing={2}>
            <Box>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                {" "}
                <Avatar src={faker.image.avatar()} />
              </StyledBadge>
            </Box>
            <Stack spacing={0.2}>
              <Typography>{faker.name.fullName()}</Typography>
              <Typography variant="caption">Online</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={3}>
            <IconButton>
              <VideoCamera />
            </IconButton>{" "}
            <IconButton>
              <Phone />
            </IconButton>{" "}
            <IconButton>
              <MagnifyingGlass />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton>
              <CaretDown />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ flexGrow: 1, overflowY: "scroll", overflowX: "hidden" }}>
        <Box p={3}>
          <Stack spacing={3}>
            {Chat_History.map((el) => {
              switch (el.type) {
                case "divider":
                  return <Timeline el={el} />;

                case "msg":
                  switch (el.subtype) {
                    case "img":
                      return <Imgmsg el={el} />;

                    case "doc":
                      //doc
                      return <Docmsg el={el} />;
                    case "link":
                      //link
                      return <Linkmsg el={el} />;

                    case "reply":
                      //reply
                      return <Replymsg el={el} />;

                    default:
                      return <Textmsg el={el} />;
                  }
                  break;

                default:
                  return <></>;
              }
            })}
          </Stack>
        </Box>
      </Box>
      <Box
        p={2}
        sx={{
          width: "100%",
          backgroundColor: "#F8FAFF",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <Stack sx={{ width: "100%" }}>
            <Box
              sx={{
                display: openPiker ? "inline" : "none",
                zIndex: 10,
                position: "fixed",
                bottom: 81,
                right: 100,
              }}
            >
              <Picker data={data} onEmojiSelect={console.log} />
            </Box>

            <StyledInput
              fullWidth
              placeholder="Write a message..."
              variant="filled"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <Stack sx={{ width: "max-content" }}>
                    <Stack
                      sx={{
                        display: openActions ? "inline" : "none",
                        position: "relative",
                      }}
                    >
                      {Actions.map((el) => (
                        <Tooltip title={el.title} placement="right">
                          <Fab
                            sx={{
                              position: "absolute",
                              top: -el.y,
                              backgroundColor: el.color,
                            }}
                          >
                            {el.icon}
                          </Fab>
                        </Tooltip>
                      ))}
                    </Stack>
                    <InputAdornment>
                      <IconButton
                        onClick={() => {
                          setOpenActions((prev) => !prev);
                        }}
                      >
                        <Link />
                      </IconButton>
                    </InputAdornment>
                  </Stack>
                ),
                endAdornment: (
                  <InputAdornment>
                    <IconButton
                      onClick={() => {
                        setOpenPiker((prev) => !prev);
                      }}
                    >
                      <Smiley />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          <Box
            sx={{
              height: 48,
              width: 48,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 1.5,
            }}
          >
            <Stack
              sx={{ height: "100%", width: "100%" }}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <IconButton>
                <PaperPlaneTilt color="white" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Conversation;
