import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Toggle({ toggled, onClick }) {
    return (
        <div onClick={onClick} >
          { toggled ? <FaMoon size={22} color="#fda740" /> : <FaSun size={22} color="#fda740" /> }
        </div>
    );
}
