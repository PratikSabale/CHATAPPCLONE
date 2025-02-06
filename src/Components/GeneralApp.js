import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "./Conversation";

function GeneralApp() {
  return (
    <Stack direction={"row"}>
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 450px)",
          backgroundColor: "white",
        }}
      >
        <Conversation />
      </Box>
    </Stack>
  );
}

export default GeneralApp;
