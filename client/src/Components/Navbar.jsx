import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link as ScrollLink } from "react-scroll";
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
  Button,
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
import { useNavigate } from "react-router";
import { db } from "../config/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import user from "../media/user.png";

export const Navbar = () => {
  const { currentUser } = useAuth();
  const Navigate = useNavigate();

  const handleDashboardClick = async () => {
    console.log("pressss");
    try {
      const clientRef = collection(db, "Client");
      const q = query(clientRef, where("email", "==", currentUser.email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        const isProjectManager = userData.isProjectManager;
        const isAdmin = userData.isAdmin;
        console.log("isAdmin: ", isAdmin);

        if (isAdmin) {
          Navigate("/admin-dashboard");
        } else if (isProjectManager) {
          Navigate("/manager-dashboard");
        } else {
          Navigate("/collaborator-dashboard");
        }
      } else {
        console.log("User not found.");
      }
    } catch (error) {
      console.error("Error fetching isProjectManager:", error);
      throw error;
    }
  };

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

  const onLoginPress = () => {
    Navigate("/login");
  };


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      {["Home", "Top Project", "Projects", "Contact Us"].map(
  (text, index,i) => (
    <ScrollLink
      to={
        index === 0
          ? "hero"
          : index === 1
          ? "top-projects"
          : index === 2
          ? "projects"
          : "about-us"
      }
      spy={true}
      smooth={true}
      duration={500}
    >
      <ListItem key={i} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {index === 0 && <HomeIcon />}
            {index === 1 && <FeaturedPlayListIcon />}
            {index === 2 && <ListAltIcon />}
            {index === 3 && <ContactsIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </ScrollLink>
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
    cursor: "pointer",
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
    <div className="flex items-center justify-between p-4 md:p-8 border-b-2 border-neutral-50">
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      > */}
      <div className="flex justify-center gap-3">
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

        <div className=" items-center justify-center cursor-pointer gap-3 hidden md:flex">
          <ScrollLink
            to="hero" // The "to" prop should match the element's ID you want to scroll to
            spy={true}
            smooth={true}
            duration={500}
            className="text-[#05276a] font-bold text-sm"
          >
            <div className="p-2">Home</div>
          </ScrollLink>

          <ScrollLink
            to="top-projects"
            spy={true}
            smooth={true}
            // duration={500}
            className="text-[#05276a] font-bold text-sm"
          >
            <div className="p-2">Top Projects</div>
          </ScrollLink>

          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="text-[#05276a] font-bold text-sm"
          >
            <div className="p-2">Projects</div>
          </ScrollLink>

          <ScrollLink
            to="about-us"
            spy={true}
            smooth={true}
            duration={500}
            className="text-[#05276a] font-bold text-sm"
          >
            <div className="p-2">About Us</div>
          </ScrollLink>

          {/* <NavLink variant="body2">Contact</NavLink> */}
        </div>
      </div>
      {/* </Box> */}

      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      > */}
      <div className="flex justify-center gap-1">
        {currentUser ? (
          // Render user's name and profile picture
          <div>
            <div className="flex">
              <div className="mr-4  text-end my-auto items-center">
                <Typography
                  variant="body2"
                  color="#05276a"
                  className="font-semibold line-clamp-1"
                >
                  {/* {JSON.parse(localStorage.getItem("user"))?.name} */}
                  {currentUser.displayName}
                </Typography>
              </div>
              <div className="mr-1 items-center my-auto">
                {JSON.parse(localStorage.getItem("user"))?.profilePic ? (
                  <img
                    // src={JSON.parse(localStorage.getItem("user")) ?.profilePic}
                    src={currentUser.photoURL}
                    alt="Profile"
                    className="rounded-full h-8 w-8"
                  />
                ) : (
                  <img
                    src={user}
                    alt="Stock Profile"
                    className="rounded-full h-8 w-8"
                  />
                )}
              </div>

              <div className="p-2 my-auto items-center">
                <button
                  onClick={handleDashboardClick}
                  className="ml-5 nline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#05276a] rounded-lg hover:bg-blue-800"
                >
                  Dashboard
                </button>
              </div>

              {/* <button className="ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#05276a] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Dashboard
          </button> */}
            </div>
            {/* <Box/> */}
          </div>
        ) : (
          // Render sign up and register buttons
          <>
            <div>
              <div className="p-1" onClick={onLoginPress}>
                <div className="p-2 font-bold rounded-lg hover:bg-neutral-100 text-sm">
                  Log In
                </div>
              </div>
            </div>
          
              <Link to="/register">
                {/* <button className="bg-[#04276a] text-white text-semibold text-center"> Register </button> */}
                <button type="button" className="text-white bg-[#04276a] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Register
                </button>
              </Link>
  
          </>
        )}

      
      </div>
    </div>
  );
};

export default Navbar;
