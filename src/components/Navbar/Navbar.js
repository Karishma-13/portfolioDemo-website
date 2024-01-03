import React from "react";
import Logo from "../../assets/images/tree_favicon.png";
import ContactMe from "../../assets/images/contact_me.png";
import CustomButton from "../CustomButton/CustomButton";

const Navbar = () => {
  return (
    <>
      <div className="mainNavbar">
        <div className="navbarDiv container-fluid">
          <div className="row d-flex align-items-center row_Pl_Pr">
            <div className="col-lg-1 col-md-1 p-0">
              <div className="navbarLogo d-flex align-items-center pt-2">
                <img src={Logo} alt="logo_image" />
              </div>
            </div>
            <div className="col-lg-9 col-md-8 p-0">
              <div className="menu pt-2 p-0">
                <div className="menu_w_50">
                  <div className="navText">Home</div>
                  <div className="navText">About</div>
                  <div className="navText">Education</div>
                  <div className="navText">Projects</div>
                  <div>
                    <CustomButton
                      className="customBtn_lessPadding"
                      bgColor="pink"
                      text="Theme"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 p-0">
              <div className="pt-2 contact_us">
                <div>
                  <CustomButton
                    className="customBtn_lessPadding"
                    bgColor="wheat"
                    img={ContactMe}
                    text="Contact Me"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
