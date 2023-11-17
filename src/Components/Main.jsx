import React from "react";
import { BsCash } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
function Main() {
  return (
    <div className="mt-5 container text-center ">
      <h1>Guide your Followers</h1>
      <div
        className="shadow-sm mb-4"
        style={{
          maxWidth: "100%",
          margin: "auto",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <BsCash
          style={{ fontSize: "2rem", marginBottom: "10px", color: "#ff007f" }}
        />
        <h2 style={{ marginBottom: "15px" }}>Earn Rewards</h2>
        <p>Earn from every purchase made through your unique codes.</p>
      </div>
      <div
        className="shadow-sm mb-4"
        style={{
          maxWidth: "100%",
          margin: "auto",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <FaShoppingCart
          style={{ fontSize: "2rem", marginBottom: "10px", color: "#ff007f" }}
        />
        <h2 style={{ marginBottom: "15px" }}>Your Personal Store</h2>
        <p>Have a personal store powered by your influence.</p>
      </div>
      <div
        className="shadow-sm mb-4"
        style={{
          maxWidth: "100%",
          margin: "auto",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <FaLock
          style={{ fontSize: "2rem", marginBottom: "10px", color: "#ff007f" }}
        />
        <h2 style={{ marginBottom: "15px" }}>Exclusive Codes</h2>
        <p>Keep your recommended sites a secret under your unique code.</p>
      </div>
    </div>
  );
}

export default Main;
