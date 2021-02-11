import React from "react";
import "./Careers.scss"
import Navbar from "../Components/shared/NavBar"
import Footer from "../Components/shared/Footer"
import Career from "./Slider/meetUpImages/careeroption.jpeg"
function Careers() {
  return (
    <div>
      <Navbar />
    <div className="careers">
     
      <img src={Career} alt="" />
      <h1>Join our Team,to make it bigger</h1>
      <p>
        Connecting Minds not only connect Minds but brings People together
        physically.Join our mission in bringing people together to acheive
        personal growth.
      </p>
      <h3>Open Positions</h3>
      <div className="division">
      <i className="fas fa-file-code"></i>
        <h4>Junior Frontend Developer</h4>
        <div className="two-parts">
          <div className="first-part">
            <h5>Your Tasks</h5>
            <li>
              Development of professional Internet presences using responsive
              web design, HTML 5, CSS3, JavaScript, PHP, MySQL and their
              maintenance / expansion
            </li>
            <li>
              Development of responsive web design prototypes with current
              technologies such as Atomic Design, Twitter Bootstrap, Gulp, Sass,
              Angular, React and Git
              </li>
          </div>
          <div className="second-part">
            <h5 >What should you bring with</h5>
            <li>Completed training in development and/or degree</li>
            <li>
              Strong creativity Style, inventiveness, but also the necessary
              "ground contact"
              </li>
              <li>In-depth knowledge of Adobe Creative Cloud</li>
              <li>Extensive knowledge in the field of digital media</li>
              <li>Teamwork</li>
              <li>
              Good communication skills and pleasure in working with colleagues
              and in customer contact
              </li>
          </div>
        </div>
      </div>

      <div className="division">
      <i className="fas fa-mail-bulk"></i>
        <h4>Junior Marketing manager</h4>
        <div className="two-parts">
          <div className="first-part">
            <h5>Your Tasks</h5>
            <li>Development of online marketing strategies and campaigns</li>
            <li>
              Elaboration, implementation and control of cross-channel digital
              packages of measures (SEO, SEA, display, retargeting as well as
              email & mobile marketing)
              </li>
              <li>Analysis and reporting on the activities</li>
            <li>
              Number-driven optimization of measures along the customer journey
              </li>
              <li>Creative team work</li>
          
          </div>
          <div className="second-part">
            <h5>What should you bring with</h5>
            <li>
              Professional experience or training in marketing, communication,
              media studies
              </li>
              <li>
              extensive experience in the areas of online marketing analysis
              (Google Analytics), SEA (keyword selection, bidding, campaign
              control), SEO (onpage, offpage), conversion optimization
              </li>
              
           
              <li>analytical thinking and problem-solving skills</li>
              <li>
              Good communication skills and pleasure in working with colleagues
              and in customer contact
              </li>
          </div>
        </div>
      </div>
      <h2 className="mailto">
        APPLY NOW AND SHOW INITIATIVE! Sent your Document to <span> mardavish@gmail.com</span>
      </h2>
    </div>
    <Footer />
    </div>
  );
}

export default Careers;
