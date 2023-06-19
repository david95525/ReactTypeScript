import * as React from "react";
import  weather from "./images/cloudy-day.png";

export const Home = () => (
    <>
        <div className="image-container" >
            <div className="font-top">

                <p >Connected Health +
                    <br />
                    Personal Health Record<br /> Platform</p>
            </div>
        </div>
        <div className="font-bottom">
            <p id="p1" className="text-center">What is Connected Health +</p>
            <p id="p2" className="text-center">Microlife Trend Tracl is a trusted place for people to gather,store,use and share health information online.</p>
        </div>
        <div className="steps">
            <a href="#"><img src={weather} alt="Image_step1" /></a>
            <a href="#"><img  alt="Image_step1" /></a>
            <a href="#"><img  alt="Image_step1" /></a>
            <a href="#"><img  alt="Image_step1" /></a>
        </div>
    </>
);