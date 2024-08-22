import { useEffect, useState } from "react";
export const ScreenResolutionViewer = () => {
  const [screenResolution, setScreenResolution] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const handleResize = () => {
    setScreenResolution({
      height: window.innerHeight,
      width: window.innerWidth,
    });
    console.log("Handle called");
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    return (
    <div>
      <span>{screenResolution.height}</span>
      <span>x</span>
      <span>{screenResolution.width}</span>
        </div>
        
  );
};