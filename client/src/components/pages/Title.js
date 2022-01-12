import React, { Component, useState, useEffect } from "react";
//import "./Title.css";

const Title = () => {
    const [font, setFont] = useState("Segoe Script");
    const [fontsize, setFontSize] = useState("44px")
    const [padding, setPadding] = useState("0px");

    useEffect(() => {
        const timer = () => {
            setFont(prevFont => {
                if (prevFont == "Segoe Script") {
                    return "Lucida Handwriting";
                }
                return "Segoe Script";
            });
            setFontSize(prevFontSize => {
                if (prevFontSize == "44px") {
                    return "40px";
                }
                return "44px";
            });
            setPadding(prevPad => {
                if (prevPad == "0px") {
                    return "10px";
                }
                return "0px";
            })
        };
        setInterval(timer, 1000/2);

        return () => { clearInterval(timer); }
    }, []);

    const titleStyle = {
        "font-family" : font,
        "font-size" : fontsize,
        "padding-top" : padding,
        "padding-bottom" : padding
    }
    return (
        <>
            <h1 style={titleStyle}>homemade</h1>
        </>
    );    
};

export default Title;