import React, { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("red");

    const cicloLuces = () => {
        if (color === "red") setColor("yellow");
        else if (color === "yellow") setColor("green");
        else setColor("red");
    };

    return (
        <div className="d-flex flex-column align-items-center mt-5">

            <div className="traffic-base rounded-3 p-3 d-flex flex-column align-items-center gap-3">

                <div className={`traffic-light red-light ${color === "red" ? "selected" : ""}`}
                    onClick={() => setColor("red")}/>

                <div className={`traffic-light yellow-light ${color === "yellow" ? "selected" : ""}`}
                    onClick={() => setColor("yellow")}/>

                <div className={`traffic-light green-light ${color === "green" ? "selected" : ""}`}
                    onClick={() => setColor("green")}/>
            </div>

            <button className="btn btn-dark mt-4" onClick={cicloLuces}>
                Next light
            </button>
        </div>
    );
};

export default TrafficLight;