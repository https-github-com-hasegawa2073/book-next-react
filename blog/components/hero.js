import React from "react";

const Hero = ({ title, subtitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{subtitle}</div>
    </div>
  );
};

export default Hero;
