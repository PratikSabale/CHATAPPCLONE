import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemButton,
  Menu,
  MenuItem,
  Stack,
  styled,
  Switch,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import logo from "../../src/Assets/images/logo.png";
import { faker } from "@faker-js/faker";
import { Nav_Butons, User_Profile } from "../Data/Data";
import { Gear } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import GeneralApp from "./GeneralApp";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#1890ff",
        ...theme.applyStyles("dark", {
          backgroundColor: "#177ddc",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,.25)",
    boxSizing: "border-box",
    ...theme.applyStyles("dark", {
      backgroundColor: "rgba(255,255,255,.35)",
    }),
  },
}));

function Dashboard() {
  const navigate = useNavigate();
  const theme = useTheme();

  const [selected, setSelected] = React.useState(0);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction={"row"}>
      <Box
        sx={{
          width: "100px", // Fixed width for sidebar
          height: "100vh",
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack
          p={2}
          direction="column"
          alignItems="center"
          spacing={3}
          justifyContent="space-between"
          sx={{ height: "100%" }}
        >
          <Stack direction="column" alignItems="center" spacing={3}>
            <Box
              sx={{
                // backgroundColor: theme.palette.primary.main,
                width: 64,
                height: 64,
                borderRadius: 1.5,
              }}
            >
              <img src={logo} />
            </Box>
            <Stack
              spacing={3}
              direction="column"
              sx={{ width: "max-content" }}
              alignItems="center"
            >
              {Nav_Butons.map((button) =>
                button.index === selected ? (
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton
                      key={button.index}
                      sx={{ width: "max-content", color: "white" }}
                    >
                      {button.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    key={button.index}
                    sx={{ width: "max-content", color: "black" }}
                    onClick={() => {
                      setSelected(button.index);
                    }}
                  >
                    {button.icon}
                  </IconButton>
                )
              )}
              <Divider
                orientation="horizontal"
                variant="middle"
                sx={{ width: 48 }}
              />
              {selected === 3 ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton sx={{ color: "white" }}>
                    <Gear size={28} />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(3);
                  }}
                >
                  <Gear size={28} />
                </IconButton>
              )}
            </Stack>
          </Stack>
          <Stack alignItems="center" spacing={3} p={2}>
            <AntSwitch />

            <Avatar
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              src={faker.image.avatar()}
            />

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
              <Stack spacing={1} px={1}>
                {User_Profile.map((el) => (
                  <MenuItem
                    onClick={() => {
                      handleClick();
                    }}
                  >
                    <Stack
                      sx={{ width: 100 }}
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <span> {el.title}</span>
                      {el.icon}
                    </Stack>
                  </MenuItem>
                ))}
              </Stack>
            </Menu>
          </Stack>
        </Stack>
      </Box>
      <Stack>
        <GeneralApp />
      </Stack>
    </Stack>
  );
}

export default Dashboard;
