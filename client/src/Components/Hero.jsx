import { Box, Button, Fab, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import { useTypewriter } from "react-simple-typewriter";
import heroImg from "../media/hero.png";
import CustomButton from "./CustomButton";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import Lottie from "lottie-react";
import animationData from "../media/animation_lkpvsxvp.json";
import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

const Hero = () => {

  const { currentUser } = useAuth();


  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));
  const [text] = useTypewriter({
    words: ["Learning technology together one project at a time"],
    loop: 0,
  });

  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
      <ThemeProvider theme={theme}>
        <Container>
          <Navbar />
          <div className="flex flex-col justify-center text-center lg:text-left gap-20 mt-12 lg:flex-row lg:items-start  p-2">
            <Box sx={{ flex: "1" }} className="">
              <Typography
                variant="body2"
                sx={{
                  fontSize: "18px",
                  color: "#687690",
                  fontWeight: "500",
                  mt: 4,
                  mb: 4,
                }}
              >
                Welcome to IIT Ropar's
              </Typography>
              <h1 className="flex items-center text-4xl sm:text-6xl  font-extrabold text-[#04276a] justify-center mb-6">
                <div className="flex flex-col gap-5">
                  <div>
                    <span className="border-b-4 border-red-400">G</span>
                    <span className="border-b-4 border-blue-600">D</span>
                    <span className="border-b-4 border-yellow-400">S</span>
                    <span className="border-b-4 border-green-400">C</span>
                  </div>
                  <div>
                    Management
                    <span className="bg-blue-300 text-blue-800 text-xl sm:text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-600 dark:text-blue-100 ml-2">
                      Portal
                    </span>
                  </div>
                </div>
              </h1>
              <div className="h-16">
                <Typography
                  variant="body2"
                  sx={{ fontSize: "18px", color: "#687690", my: 4 }}
                >
                  {text}
                </Typography>
              </div>

              {/* <div className = "bg-[#000336] rounded-xl">
            <span >
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="Join a Project"
              heroBtn={true}
            />
            </span>
            </div> */}
            
            <Link to={currentUser ? "/projects" : "/register"}>
              <Fab
                size="medium"
                variant="extended"
                className="bg-[#04276a] text-gray-300 hover:text-[#04276a]"
                sx={{ mr: 2 }}
              >
                Join Project
              </Fab>
              </Link>
              
              <Link to={currentUser ? "/host-project" : "/register"}>
              <Fab
                size="medium"
                variant="extended"
                className="bg-neutral-100 text-[#04276a] hover:bg-[#04276a] hover:text-neutral-100"
              >
                Host Project
              </Fab>
              </Link>
            </Box>
            

            <Box className="items-start" sx={{ flex: "1.25" }}>
              {/* <img
              src={heroImg}
              // src = ""
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            /> */}
              <Lottie animationData={animationData} />
            </Box>
          </div>

          {/* <CustomBox> */}

          {/* </CustomBox> */}
        </Container>
      </ThemeProvider>
    </Box>
  );
};

export default Hero;
