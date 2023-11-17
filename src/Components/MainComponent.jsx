import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Main from "./Main";
import View from "./View";
import Footer from "./Footer";

function MainComponent() {
  return (
    <div>
      <div>
        <Navbar />
        <Header />
      </div>
      <div>
        <img
          src="https://storecode.in/images/influence-bg.jpg"
          alt="Background"
          style={{
            width: "100%", // Adjust the width as needed
            height: "auto", // Maintain aspect ratio
          }}
        />
      </div>
      <div>
        <Main />
        <View />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default MainComponent;
