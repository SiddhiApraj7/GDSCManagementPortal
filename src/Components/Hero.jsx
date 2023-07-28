import { Box, Button, Fab, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import { useTypewriter } from 'react-simple-typewriter';
import heroImg from "../media/hero.png";
import CustomButton from "./CustomButton";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

const Hero = () => {
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
    words: ['Learning technology together one project at a time'],
    loop: 0
  })

  return (
   
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
     <ThemeProvider theme={theme}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: "1" }}>
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
            <Title variant="h1">
              GDSC Management Portal
            </Title>
            <div className="h-16">
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
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
            <Fab size="medium" variant = "extended" className="bg-[#000336] text-gray-300 hover:text-[#000336]"  sx = {{mr : 2}}>
               Join Project
            </Fab>
            <Fab size="medium" variant = "extended" className="bg-neutral-100 text-[#000336] hover:text-neutral-100 hover:bg-[#000336]" >
               Host Project
            </Fab>
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={heroImg}
              // src = ""
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
      </ThemeProvider>
    </Box>
  );
};

export default Hero;
