import React from "react";

const CustomButton = ({ className, bgColor, img, text, textSize, textWeight, textColor, hoverClass }) => {


    return (
        <>
            <div>
                <button className={`${className} ${hoverClass}`} style={{ backgroundColor: bgColor }}>
                    <div className="d-flex align-items-center">
                        {img ? (
                            <>
                                <div className="contactMeLogo">
                                    <img className="pe-2" src={img} alt="" />
                                </div>
                            </>
                        ) : null}
                        <div>
                            <p className="para_mb_0"
                                style={{
                                    fontSize: textSize, fontWeight: textWeight,
                                    color: textColor
                                }}>
                                {text}
                            </p>
                        </div>
                    </div>
                </button>
            </div>
        </>
    );
};

export default CustomButton;
