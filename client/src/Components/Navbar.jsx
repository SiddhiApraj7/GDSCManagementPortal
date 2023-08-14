import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import logoImg from "../media/gdsc.svg";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export const Navbar = () => {
  const { currentUser } = useAuth();

  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Features", "Services", "Listed", "Contact"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <FeaturedPlayListIcon />}
                  {index === 2 && <MiscellaneousServicesIcon />}
                  {index === 3 && <ListAltIcon />}
                  {index === 4 && <ContactsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#04276a",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    height: "50px",
    width: "150px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  return (

    <NavbarContainer className="border-b-2 border-neutral-50">

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <NavbarLogo src={logoImg} alt="logo" />
        </Box>

        <NavbarLinksBox>
          <NavLink variant="body2">Home</NavLink>
          <NavLink variant="body2">Features</NavLink>
          <NavLink variant="body2">Services</NavLink>
          <NavLink variant="body2">Listed</NavLink>
          <NavLink variant="body2">Contact</NavLink>
        </NavbarLinksBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >

        {currentUser ? (
          // Render user's name and profile picture
          <Box>
            <div className="flex">
              <div className="mr-4 mt-2">
                <Typography variant="body2" color="#05276a" className="font-semibold">
                  {/* {JSON.parse(localStorage.getItem("user"))?.name} */}
                  {currentUser.displayName}
                </Typography>
              </div>
              <div className="mr-1">
                {JSON.parse(localStorage.getItem("user"))?.profilePic ? (
                  <img
                    // src={JSON.parse(localStorage.getItem("user"))?.profilePic}
                    src={currentUser.photoURL}
                    alt="Profile"
                    className="rounded-full h-8 w-8"
                  />
                ) : (
                  <img
                    src="user.png"
                    alt="Stock Profile"
                    className="rounded-full h-8 w-8"
                  />
                )}
              </div>
            </div>
          </Box>
        ) : (
          // Render sign up and register buttons
          <>
            <NavLink variant="body2">Sign Up</NavLink>
            <div className="bg-[#04276a] rounded-xl">
              <CustomButton
                backgroundColor="#04276a"
                color="#fff"
                buttonText="Register"
              />
            </div>
          </>
        )}

        {/* <NavLink variant="body2" >Sign Up</NavLink>
        <div className="bg-[#04276a] rounded-xl">
          <CustomButton
            backgroundColor="#04276a"
            color="#fff"
            buttonText="Register"
          />
        </div> */}
      </Box>
    </NavbarContainer>

  );
};

export default Navbar;
