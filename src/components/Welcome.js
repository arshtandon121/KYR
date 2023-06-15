import React from "react";
import youtube from '../Assets/youtube.jpg'
import "../css/Welcome.css";
export default function Welcome() {
  return (
    <div>
      <div className="welcome">
        <div className="innerContainer">
          <div className="youtube">
            <img src={youtube}/>
          </div>

          <div className="content">
            <div className="heading">WELCOME TO OUR WEBSITE</div>

            <div className="description">
              Elevator and lift manufacturers and suppliers include KYR
              Elevators (A unit of Spectra Enterprises). To ensure that our
              products are created and delivered on schedule, we maintain a
              clean workplace and follow all safety regulations. Because of our
              significant experience, we have Read more...
            </div>

            
             <div className="cardContainer">
             <div className="welcomeCard">
                <div className="cardHeading">Nature of Buissness</div>

                <div className="cardContent">
                  Manufacturer, Trader, Wholesaler
                </div>
              </div>

              <div className="welcomeCard">
                <div className="cardHeading">Nature of Buissness</div>

                <div className="cardContent">
                  Manufacturer, Trader, Wholesaler
                </div>
              </div>
             </div>

             <div className="cardContainer2">

             <div className="welcomeCard">
                <div className="cardHeading">Nature of Buissness</div>

                <div className="cardContent">
                  Manufacturer, Trader, Wholesaler
                </div>
              </div>

              <div className="welcomeCard">
                <div className="cardHeading">Nature of Buissness</div>

                <div className="cardContent">
                  Manufacturer, Trader, Wholesaler
                </div>
              </div>

             </div>
              
           
            </div>
            
          </div>
   
          </div>

          </div>

  );
}
