import { Box, Fab, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import { useTypewriter } from "react-simple-typewriter";
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

const Hero = ({name}) => {

  const { currentUser } = useAuth();

  const [text] = useTypewriter({
    words: ["Learning technology together one project at a time"],
    loop: 0,
  });

  return (
    <div id={name}>
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
              
              <Lottie animationData={animationData} />
            </Box>
          </div>

          
        </Container>
      </ThemeProvider>
    </Box>
    </div>
  );
};

export default Hero;
