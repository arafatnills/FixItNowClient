"use client";
import { TypeAnimation } from "react-type-animation";

const HeroType = () => {
  return (
    <TypeAnimation
      sequence={[
        "Just a Click Away",
        2000, // Waits 2s
        "Trusted & Verified Pros", 
        2000, // Waits 2s
        "Fast & Reliable Service", 
        2000, // Waits 2s
        "Right At Your Doorstep",
        2000,
        
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    />
  );
};
export default HeroType;
