import React from "react";
import "./Toggle.scss";

export default function Toggle({ toggled, onClick }) {
    return (
        <div onClick={onClick} className={`toggle${toggled ? " night" : ""}`}>
            <div className="notch">
                {/* <div className="crater" />
                <div className="crater" /> */}
            </div>
         
        </div>
    );
}
