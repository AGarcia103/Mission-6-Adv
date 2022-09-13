import React from "react";
import Navbar from "./NavBar";
import HomeContent from "./HomeContent";
//import Footer from "./HomeFooter";


export default function Home() {
  return (
    
      <div>
        <Navbar />
        <HomeContent/>
       {/* <Footer/>*/}
      </div>
  );
}