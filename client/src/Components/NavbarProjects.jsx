import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link as ScrollLink } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import logoImg from "../media/gdsc.svg";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import PostAddIcon from '@mui/icons-material/PostAdd';
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
import { useNavigate } from "react-router";
import { db } from "../config/firebase";
import { collection, query, where, getDocs, getDoc, doc, setDoc } from "firebase/firestore";


export const NavbarProjects = () => {
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

                if (isAdmin) {
                    Navigate("/admin-dashboard");
                }
                else if (isProjectManager) {
                    Navigate("/manager-dashboard");
                }
                else {
                    Navigate("/collaborator-dashboard");
                }
            } else {
                console.log('User not found.');
            }
        } catch (error) {
            console.error('Error fetching isProjectManager:', error);
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

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem disablePadding>
                    <Link to="/">
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to="/projects">
                        <ListItemButton>
                            <ListItemIcon>
                                <FolderCopyIcon />
                            </ListItemIcon>
                            <ListItemText primary="All Projects" />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to="/host-project">
                        <ListItemButton>
                            <ListItemIcon>
                                <PostAddIcon />
                            </ListItemIcon>
                            <ListItemText primary="Host Project" />
                        </ListItemButton>
                    </Link>
                </ListItem>
            </List>
            {/* <List>
                {["Home", "All Projects", "Host Project"].map(
                    (text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index === 0 && <HomeIcon />}
                                    {index === 1 && <FolderCopyIcon />}
                                    {index === 2 && <PostAddIcon />}

                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    )
                )}
            </List> */}
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

                    <Link to="/">
                        <div className="p-2 font-bold text-[#05276a] text-sm">
                            Home
                        </div>
                    </Link>



                    <Link to="/projects ">
                        <div className="p-2 font-bold text-[#05276a] text-sm">
                            All Projects
                        </div>
                    </Link>

                    <Link to="/host-project">
                        <div className="p-2 font-bold text-[#05276a] text-sm">
                            Host Project
                        </div>
                    </Link>


                    {/* <NavLink variant="body2">Contact</NavLink> */}
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
                            <div className="mr-4 mt-2 text-end">
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
                            <div className="ml-2">
                                <button onClick={handleDashboardClick} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#05276a] rounded-lg hover:bg-blue-800">Dashboard</button>
                            </div>

                        </div>
                        {/* <Box/> */}


                    </Box>
                ) : (
                    // Render sign up and register buttons
                    <>
                        <Link to="/login" ><div className="p-2"><NavLink variant="body2" className="p-1">Log In</NavLink></div></Link>
                        <div className="bg-[#04276a] rounded-xl">
                            <Link to="/register">
                                {/* <button className="bg-[#04276a] text-white text-semibold text-center"> Register </button> */}
                                <CustomButton
                                    backgroundColor="#04276a"
                                    color="#fff"
                                    buttonText="Register"
                                />
                            </Link>
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

export default NavbarProjects;
