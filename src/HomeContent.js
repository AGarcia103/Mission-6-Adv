import React from 'react';
import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import IceCream from "./IceCream.jpg";



function HomeContent () {

  return (

    <Box 
      sx={{
      boxSizing: "border-box",
      backgroundImage: `url(${IceCream})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "500px",
      width: "100%"
      }}>
  
    <Typography gutterBottom variant="h3" component="div" 
      sx={{
      fontFamily: "Poppins", 
      color: "#663b0f",
      paddingTop: "200px",
      textAlign: "center",
      marginBottom: "0px"
      }}>
        Taste Happiness
    </Typography>
      <br/>
      <br/>
      <Typography gutterBottom variant="h4" component="div" 
      sx={{
      fontFamily: "Poppins", 
      color: "#663b0f",
      paddingTop: "250px",
      textAlign: "center",
      marginBottom: "0px"
      }}>
        <strong>
            Ice Cream
        </strong>
    </Typography>

      
  {/* ------- ICE CREAM SECTION 1 ------- */}

    <Container disableGutters={true} maxWidth={false}
        sx={{
          display: "flex",
          paddingTop: "10px",
          textAlign: "center",
          justifyContent: "center"
          }}>
        <div class="container">
            <img id="1"
                src="/images/BananaPeanut.jpg" 
                alt="Banana Peanut Butter Chip Ice Cream" 
                height="290px" 
                width="290px"
                style={{padding: "50px"}}
                />
                
            <img id="2"
                src="/images/CaramelCone.jpg" 
                alt="Caramel Cone Ice Cream" 
                height="305px" 
                width="305px"
                style={{padding: "30px"}}
                />

            <img id="3"
                src="/images/ChocolateChip.jpg" 
                alt="Chocolate Chip Cookie Dough Ice Cream" 
                height="320px" 
                width="320px"
                style={{padding: "30px"}}
                />
            
        </div>       
    </Container>

  {/* ------- ICE CREAM SECTION 2 ------- */}

  <Container disableGutters={true} maxWidth={false}
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center"
          }}>
        <div class="container">
            <img id="4"
                src="/images/VanillaSwiss.jpg" 
                alt="Vanilla Swiss Almond Ice Cream" 
                height="300px" 
                width="300px"
                style={{padding: "20px"}}
                />
                
            <img id="5"
                src="/images/MintChip.jpg" 
                alt="Mint Chip Ice Cream" 
                height="300px" 
                width="300px"
                style={{padding: "20px"}}
                />

            <img id="6"
                src="/images/Strawberry.jpg" 
                alt="Strawberries &amp; Cream Ice Cream" 
                height="300px" 
                width="300px"
                style={{padding: "20px"}}
                />

            
            
        </div>       
    </Container>
    <br/>

  {/* ---------- FOOTER ---------- */}
    <hr/>
   {/* -- <Footer/> --*/}

    <Container disableGutters={true} maxWidth={false}
        sx={{ 
          height: "30px",
          marginTop: "20px",
          textAlign: "center",
          color: "#663b0f",
          fontSize: "smaller"}}>
      <Typography>
      Copyright 2022 &copy; SubZero Delights
      </Typography>
    </Container>  
  </Box>
    );
}
export default HomeContent;