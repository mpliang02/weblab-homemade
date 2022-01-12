import React, { Component, useState, useEffect } from "react";
//import "./Title.css";

const Title = () => {
    const [font, setFont] = useState("Segoe Script");
    const [fontsize, setFontSize] = useState("32px")

    useEffect(() => {
        const timer = () => {
            setFont(prevFont => {
                if (prevFont == "Segoe Script") {
                    return "Arial";
                }
                return "Segoe Script";
            });
            setFontSize(prevFontSize => {
                if (prevFontSize == "32px") {
                    return "48px";
                }
                return "32px";
            })
        };
        setInterval(timer, 1000/2);

        return () => { clearInterval(timer); }
    }, []);

    const titleStyle = {
        "font-family" : font,
        "font-size" : fontsize
    }
    return (
        <>
            <h1 style={titleStyle}>homemade</h1>
        </>
    );    
};

export default Title;