import { faker, Faker } from "@faker-js/faker";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from "react";
import { ChatList } from "../Data/Data";

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

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
  return (
    <Box
      p={2}
      sx={{
        width: "100%",

        borderRadius: 1,
        backgroundColor: "white",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}

          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems={"center"}>
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge color="primary" badgeContent={unread}></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

function Chats() {
  return (
    <Box
      sx={{
        position: "relative",
        width: 350,
        backgroundColor: "#F8FAFF",
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack p={2} spacing={3} sx={{ height: "100vh" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5">Chat</Typography>
          <IconButton>
            <CircleDashed size={28} />
          </IconButton>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{ width: "100%" }}
          spacing={1}
        >
          <MagnifyingGlass size={28} />
          <input placeholder="Search......" className="w-full outline-none" />
        </Stack>
        <Stack>
          <Divider />
        </Stack>

        <Stack
          spacing={3}
          direction={"column"}
          sx={{
            flexGrow: 1,
            overflowY: "scroll",
            overflowX: "hidden",
            height: "100%",
            pr: 1,
          }}
        >
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Pinned
            </Typography>
            {ChatList.filter((el) => el.pinned).map((el) => {
              return <ChatElement {...el} sx={{ width: "100%" }} />;
            })}
          </Stack>
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              All Chats
            </Typography>
            {ChatList.filter((el) => !el.pinned).map((el) => {
              return <ChatElement {...el} sx={{ width: "100%" }} />;
            })}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Chats;
