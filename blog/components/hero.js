import React from "react";

const Hero = ({ title, subtitle, imageOn = false }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{subtitle}</div>
      {imageOn && <figure>[画像]</figure>}
    </div>
  );
};

export default Hero;
