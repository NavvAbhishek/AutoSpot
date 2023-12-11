import React from "react";
import Main from "./Main";
import Services from "./Services";
import Featured from "./Featured";
import ImgText from "./ImgText";
import Blog from "./Blog";
import CustomerExp from "./CustomerExp";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Main />
      <Services />
      <Featured />
      <ImgText />
      <Blog />
      <CustomerExp />
      <NewsLetter />
      <Footer />
    </div>
  );
}
