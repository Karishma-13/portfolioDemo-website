import React from "react";
import WomenImg from "../../assets/images/womenImg.png";
import CustomButton from "../CustomButton/CustomButton";

const Introduction = () => {
  return (
    <>
      <div className="mainIntroduction height_100vh">
        <div className="introductionDiv container-fluid h-100">
          <div className="row h-100">
            <div className="col-lg-6 p-0">
              <div
                className="commonRow h-100"
                style={{ backgroundColor: "grey" }}
              >
                <div className="pt_7rem">
                  <div className="row">
                    <div className="helloText word_wrap">Hello,</div>
                  </div>

                  <div className="row">
                    <div className="nameText word_wrap">
                      <span className="pe-2">I'm</span>
                      <span className="text-success">Karishma</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="nameText lineHt_103 word_wrap">
                      Software Engineer
                    </div>
                  </div>
                  <div className="row">
                    <div className="pt-3 word_wrap">
                      I am a skilled and passionate developer with experience in
                      creating visually appealing and user-friendly websites.
                    </div>
                  </div>
                  <div className="row">
                    <div className="pt-3 pb-3">
                      <CustomButton
                        className="customBtn_morePadding"
                        text="Know More"
                        textSize="1.03rem"
                        textWeight="700"
                        textColor="black"
                        hoverClass="customBtnHover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div
                className="imgDiv h-100"
                style={{ backgroundColor: "orange" }}
              >
                <div className="row">
                  <div className="womenImgDiv">
                    <img src={WomenImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
