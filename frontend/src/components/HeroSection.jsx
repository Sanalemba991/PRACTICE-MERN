import React from "react";

function HeroSection() {
  return (
    <section className="heroSection" id="heroSection">
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1>Delicious</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
                <img src="/hero1.png"/>
            </div>
            <div className="textAndLogo">
                <div className="textWithSvg">
                    <h1 className="title">Food</h1>
                    <h1 className="title dishes_title">Dishes</h1>

                    <img src="/threelines.svg"alt="logo" className="logo"/>
                </div>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">

            <img src="/hero2.png" alt="hero2"></img>
          </div>
          <h1>Titel</h1>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
