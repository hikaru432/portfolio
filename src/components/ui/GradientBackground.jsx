import React from 'react';

const GradientBackground = () => {
  return (
    <>
      {/* Top right gradient bubble */}
      <div 
        className="absolute w-96 h-96 rounded-full opacity-15 z-0"
        style={{
          background: "linear-gradient(135deg, #5271ff 0%, #3b5afe 100%)",
          top: "-100px",
          right: "-100px",
        }}
      />
      
      {/* Bottom left gradient bubble */}
      <div 
        className="absolute w-72 h-72 rounded-full opacity-15 z-0"
        style={{
          background: "linear-gradient(135deg, #ff5c7c 0%, #ff3c6a 100%)",
          bottom: "-50px",
          left: "-50px",
        }}
      />
      
      {/* Center decorative shape */}
      <div 
        className="absolute w-48 h-48 opacity-5 z-0"
        style={{
          background: "#000",
          transform: "rotate(45deg)",
          top: "20%",
          left: "15%",
        }}
      />
      
      {/* Floating decorative elements - generated statically */}
      <div className="absolute w-6 h-6 rounded-full opacity-8 z-0" style={{ left: '25%', top: '15%', backgroundColor: '#5271ff' }} />
      <div className="absolute w-10 h-10 opacity-8 z-0" style={{ left: '75%', top: '65%', backgroundColor: '#ff5c7c', transform: 'rotate(45deg)' }} />
      <div className="absolute w-8 h-8 rounded-full opacity-8 z-0" style={{ left: '60%', top: '30%', backgroundColor: '#5271ff' }} />
      <div className="absolute w-12 h-12 opacity-8 z-0" style={{ left: '10%', top: '70%', backgroundColor: '#ff5c7c', transform: 'rotate(45deg)' }} />
      <div className="absolute w-7 h-7 rounded-full opacity-8 z-0" style={{ left: '45%', top: '85%', backgroundColor: '#5271ff' }} />
    </>
  );
};

export default GradientBackground;