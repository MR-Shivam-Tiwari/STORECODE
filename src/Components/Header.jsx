import React from "react";

function Header() {
  return (
    <div
      className="container-login100"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        WebkitTextSizeAdjust: "100%",
        background:
          "linear-gradient(90deg, rgba(9, 211, 223, 1) 0%, rgba(9, 211, 223, 1) 26%, rgba(237, 12, 252, 1) 100%)",
      }}
    >
      <div
        className="card p-5"
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "450px",
        }}
      >
        <div className="wrap-login100 p-l-55 p-r-55 p-t-25 p-b-54">
          <h1
            className=" "
            style={{
              fontWeight: "bold",
              marginTop: "-30px",
              marginBottom: "40px",
            }}
          >
            Shop with Storecode
          </h1>

          <div
            className="wrap-input100 validate-input m-b-23"
            data-validate="Product code is required"
          >
            <input
              className="input100"
              type="text"
              id="product_code"
              name="product_code"
              placeholder="Enter Product Code"
              style={{
                borderRadius: "0px", // Remove border-radius for a flat look
                border: "none", // Remove the default input border
                borderBottom: "2px solid gray", // Add a bottom border with the color you prefer
                padding: "10px",
                width: "100%",
                fontSize: "16px",
                outline: "none", // Remove the default input outline
                boxShadow: "none", // Remove any default box shadow
                marginBottom: "5px", // Space at the bottom to separate the next element
              }}
            />

            <span className="focus-input100"></span>
          </div>

          <div className="mt-3">
            <div className="wrap-login100-form-btn">
              <div className="login100-form-bgbtn"></div>
              <button
                type="submit"
                className="mt-3"
                style={{
                  padding: "10px",
                  borderRadius: "30px",
                  fontSize: "18px",
                  color:"white",
                  width: "100%",
                  border:'none',
                  background:
                    "linear-gradient(90deg, rgba(9, 211, 223, 1) 0%, rgba(9, 211, 223, 1) 26%, rgba(237, 12, 252, 1) 100%)",
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
