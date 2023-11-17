import React, { useState } from "react";

function View() {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggle = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div>
      <div className="text-center">
        <h1>The Exclusive Partnership Program</h1>
        <button
          type="button"
          className="mt-3 mb-2 "
          style={{
            padding: "10px",
            borderRadius: "5px",
            fontSize: "18px",
            color: "white",
            backgroundColor: "#ff007f",
            width: "130px",
            border: "none",
          }}
          onClick={handleToggle}
        >
          {showDetails ? "Close" : "View More"}
        </button>
        {showDetails && (
          <div className="d-flex align-items-center justify-content-center">
            <p className="w-75 " style={{ fontSize: "20px" }}>
              Storecode is gearing up to collaborate with major shopping brands.
              As an Influencer on our platform, you gain a fantastic advantage –
              your very own personal store on our website. This store is powered
              by your influence and recommendations. Here's the twist: We
              encourage you not to reveal the exact websites from which you
              purchase the products you promote in your new videos henceforth.
              Instead, keep it a secret under the code you share. Why? Because
              disclosing sites directly can create unnecessary competition and,
              in many cases, lead to users buying directly from those mentioned
              sites, bypassing all your hard work. By sharing your unique code,
              your followers are directed to the product on your recommended
              site. As we embark on our collaboration with major brands, your
              influencer status will transform into a powerful partnership
              program, offering you the opportunity to earn from every purchase
              made through your unique codes. Your influence becomes your
              earning potential. This approach ensures that your hard work as an
              influencer is rewarded, and it aligns perfectly with our mission
              to create a win-win ecosystem for influencers and their followers.
              Get ready to make the most of this exclusive partnership program
              with Storecode!
            </p>
          </div>
        )}
      </div>
      <div className="text-center" style={{ backgroundColor: "#ff007f" }}>
        <div className="p-4">
          <h1 className="text-white ">Become a Guide at StoreCode</h1>
          <button
            type="button"
            className="mt-3 mb-2 "
            style={{
              padding: "10px",
              borderRadius: "5px",
              fontSize: "18px",
              color: "white",
              backgroundColor: "#4cbb17",
              width: "130px",
              border: "none",
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default View;
