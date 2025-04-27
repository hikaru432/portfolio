import React, { useEffect, useRef, useState } from 'react';

const LuffyAnimation = () => {
  const containerRef = useRef(null);
  const requestRef = useRef(null);
  const luffyRef = useRef(null);
  const chaseTimerRef = useRef(null);
  
  // Luffy state
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState(null);
  const [action, setAction] = useState('idle');
  const [direction, setDirection] = useState('right');
  const [specialForm, setSpecialForm] = useState('normal'); // normal, balloon, gear5
  const [isStretching, setIsStretching] = useState(false);
  const [stretchPhase, setStretchPhase] = useState(0); // 0: not stretching, 1: wind-up, 2: stretching
  
  // Mouse position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouseInProximity, setMouseInProximity] = useState(false);
  
  // Constants
  const LUFFY_SIZE = 200; 
  const MOVEMENT_SPEED = 1.5;
  const CHASE_SPEED = 1;
  const WANDER_INTERVAL = 2000;
  const PROXIMITY_DISTANCE = 200;
  
  // Set a random target for Luffy to move to
  const setRandomTarget = () => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const maxX = containerRect.width - LUFFY_SIZE;
    const maxY = containerRect.height - LUFFY_SIZE;
    
    setTarget({
      x: Math.random() * maxX,
      y: Math.random() * maxY
    });
    setAction('walking');
  };
  
  // Eat food and become balloon
  const eatFood = () => {
    setSpecialForm('balloon');
    setTimeout(() => setSpecialForm('normal'), 2000);
  };
  
  // Stretch arm with swing
  const stretchArm = () => {
    if (isStretching) return;
    
    setIsStretching(true);
    setStretchPhase(1); // Wind-up
    
    // Wind-up pause then stretch
    setTimeout(() => {
      setStretchPhase(2); // Stretching
      
      // Retract after stretch
      setTimeout(() => {
        setStretchPhase(0);
        setIsStretching(false);
      }, 1000);
    }, 500);
  };
  
  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const relativeX = e.clientX - containerRect.left;
      const relativeY = e.clientY - containerRect.top;
      
      setMousePos({ x: relativeX, y: relativeY });
      
      // Check if mouse is close to Luffy
      const dx = relativeX - position.x - LUFFY_SIZE/2;
      const dy = relativeY - position.y - LUFFY_SIZE/2;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < PROXIMITY_DISTANCE) {
        setMouseInProximity(true);
        setTarget({ x: relativeX - LUFFY_SIZE/2, y: relativeY - LUFFY_SIZE/2 });
        
        if (action !== 'chasing') {
          setAction('chasing');
          
          // Start timer for Gear 5 transformation - 3 seconds as requested
          if (chaseTimerRef.current) clearTimeout(chaseTimerRef.current);
          chaseTimerRef.current = setTimeout(() => {
            setSpecialForm('gear5');
            
            // Change back after 5 seconds
            setTimeout(() => setSpecialForm('normal'), 5000);
          }, 2000);
        }
      } else if (mouseInProximity) {
        setMouseInProximity(false);
        
        // Return to wandering if we were previously chasing
        if (action === 'chasing') {
          setAction('idle');
          
          // Clear Gear 5 timer if we stop chasing
          if (chaseTimerRef.current) {
            clearTimeout(chaseTimerRef.current);
            chaseTimerRef.current = null;
          }
        }
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [position, mouseInProximity, action]);
  
  // Wandering behavior and special transformations
  useEffect(() => {
    const wanderInterval = setInterval(() => {
      // Only wander if not chasing
      if (action !== 'chasing') {
        // Random chance to change action
        const rand = Math.random();
        if (rand < 0.4 && action !== 'walking') {
          setRandomTarget();
        } else if (rand >= 0.7 && action !== 'idle') {
          setAction('idle');
        }
        
        // Random chance for special behaviors
        const behaviorRand = Math.random();
        if (behaviorRand < 0.1 && specialForm === 'normal' && !isStretching) {
          // 10% chance to eat and become balloon
          eatFood();
        } else if (behaviorRand < 0.2 && specialForm === 'normal' && !isStretching) {
          // 10% chance for arm stretch
          stretchArm();
        }
      }
    }, WANDER_INTERVAL);
    
    return () => clearInterval(wanderInterval);
  }, [action, specialForm, isStretching]);
  
  // Animation loop
  useEffect(() => {
    const animate = () => {
      if (target && (action === 'walking' || action === 'chasing')) {
        const dx = target.x - position.x;
        const dy = target.y - position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Set direction based on movement
        if (dx !== 0) {
          setDirection(dx > 0 ? 'right' : 'left');
        }
        
        // If we've reached the target
        if (distance < 5) {
          if (action === 'walking') {
            setAction('idle');
          }
          setVelocity({ x: 0, y: 0 });
        } else {
          // Move towards target
          const speed = action === 'chasing' ? CHASE_SPEED : MOVEMENT_SPEED;
          const vx = (dx / distance) * speed;
          const vy = (dy / distance) * speed;
          
          setVelocity({ x: vx, y: vy });
          setPosition(prev => ({
            x: prev.x + vx,
            y: prev.y + vy
          }));
        }
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [position, velocity, target, action]);
  
  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full overflow-hidden"
      style={{ minHeight: '400px' }}
    >
      
      {/* Luffy character */}
      <div
        ref={luffyRef}
        className="absolute"
        style={{
          left: position.x,
          top: position.y,
          width: LUFFY_SIZE,
          height: LUFFY_SIZE,
          transform: `scaleX(${direction === 'left' ? -1 : 1})`,
          transition: 'transform 0.2s ease',
        }}
      >
        {/* Luffy SVG */}
        <svg 
          viewBox="0 0 200 200" 
          width={LUFFY_SIZE} 
          height={LUFFY_SIZE}
          className={`${action === 'idle' ? 'animate-bounce-slow' : action === 'chasing' ? 'animate-run-fast' : 'animate-walk'}`}
        >
          {/* Straw Hat - bigger in Gear 5 */}
          <circle 
            cx="100" 
            cy={specialForm === 'gear5' ? "50" : "65"} 
            r={specialForm === 'gear5' ? "40" : "35"} 
            fill={specialForm === 'gear5' ? "#FFFFFF" : "#FFD700"} 
          />
          <circle 
            cx="100" 
            cy={specialForm === 'gear5' ? "50" : "65"} 
            r={specialForm === 'gear5' ? "32" : "28"} 
            fill={specialForm === 'gear5' ? "#F5F5F5" : "#8B4513"} 
          />
          <rect 
            x={specialForm === 'gear5' ? "60" : "65"} 
            y={specialForm === 'gear5' ? "50" : "65"} 
            width={specialForm === 'gear5' ? "80" : "70"} 
            height="5" 
            fill={specialForm === 'gear5' ? "#F5F5F5" : "#8B4513"} 
          />
          
          {/* Head - changes based on form */}
          <circle 
            cx="100" 
            cy={specialForm === 'gear5' ? "80" : "85"} 
            r={specialForm === 'balloon' ? "32" : specialForm === 'gear5' ? "30" : "26"} 
            fill={specialForm === 'gear5' ? "#FFFFFF" : "#FFE0BD"} 
          />
          
          {/* Eyes - change based on form */}
          {specialForm === 'gear5' ? (
            <>
              <circle cx="90" cy="74" r="6" fill="black" />
              <circle cx="110" cy="74" r="6" fill="black" />
              <circle cx="90" cy="74" r="2" fill="white" />
              <circle cx="110" cy="74" r="2" fill="white" />
            </>
          ) : (
            <>
              <circle cx="90" cy="80" r="5" fill="black" />
              <circle cx="110" cy="80" r="5" fill="black" />
            </>
          )}
          
          {/* Scar under eye */}
          <line 
            x1="90" y1={specialForm === 'gear5' ? "84" : "90"} 
            x2="98" 
            y2={specialForm === 'gear5' ? "84" : "90"} 
            stroke="#FF0000" 
            strokeWidth={specialForm === 'gear5' ? "3" : "2"} 
          />
          
          {/* Mouth - changes based on action and form */}
          {specialForm === 'balloon' ? (
            <circle cx="100" cy="100" r="8" fill="black" />
          ) : specialForm === 'gear5' ? (
            <path d="M85,94 Q100,104 115,94" fill="none" stroke="black" strokeWidth="3" />
          ) : action === 'idle' ? (
            <path d="M90,98 Q100,108 110,98" fill="none" stroke="black" strokeWidth="2" />
          ) : action === 'walking' ? (
            <path d="M90,100 Q100,104 110,100" fill="none" stroke="black" strokeWidth="2" />
          ) : action === 'chasing' ? (
            <circle cx="100" cy="100" r="6" fill="black" />
          ) : null}
          
          {/* Body - changes based on form */}
          {specialForm === 'balloon' ? (
            <circle cx="100" cy="130" r="35" fill="#FF0000" />
          ) : specialForm === 'gear5' ? (
            <>
              <rect x="85" y="110" width="30" height="40" fill="#FFFFFF" />
              <path d="M85,110 Q100,105 115,110" fill="none" stroke="#FFFFFF" strokeWidth="5" />
            </>
          ) : (
            <rect x="85" y="111" width="30" height="38" fill="#FF0000" />
          )}
          
          {/* Arms - animated and changes based on form and stretching */}
          {isStretching && stretchPhase > 0 ? (
            <>
              {/* Left arm normal */}
              <line 
                x1={specialForm === 'balloon' ? "75" : "85"} 
                y1={specialForm === 'balloon' ? "130" : "120"} 
                x2={specialForm === 'balloon' ? "55" : "65"} 
                y2={specialForm === 'balloon' ? "130" : "130"} 
                stroke={specialForm === 'gear5' ? "#FFFFFF" : "#FFE0BD"} 
                strokeWidth={specialForm === 'gear5' ? "16" : "12"} 
                strokeLinecap="round"
              />
              
              {/* Right arm stretching with wind-up */}
              {stretchPhase === 1 ? (
                // Wind-up phase - arm pulled back
                <line 
                  x1={specialForm === 'balloon' ? "125" : "115"} 
                  y1={specialForm === 'balloon' ? "130" : "120"} 
                  x2={specialForm === 'balloon' ? "105" : "95"} 
                  y2={specialForm === 'balloon' ? "130" : "110"}
                  stroke={specialForm === 'gear5' ? "#FFFFFF" : "#FFE0BD"} 
                  strokeWidth={specialForm === 'gear5' ? "16" : "12"} 
                  strokeLinecap="round"
                />
              ) : (
                // Stretching phase - arm extended with curve
                <path 
                  d={`M${specialForm === 'balloon' ? "125" : "115"},${specialForm === 'balloon' ? "130" : "120"} 
                      Q${direction === 'right' ? "160,100" : "160,140"} ${direction === 'right' ? "200,120" : "200,120"}`} 
                  stroke={specialForm === 'gear5' ? "#FFFFFF" : "#FFE0BD"} 
                  strokeWidth={specialForm === 'gear5' ? "16" : "12"} 
                  strokeLinecap="round"
                  fill="none"
                  className="animate-stretch"
                />
              )}
            </>
          ) : (
            <>
              {/* Normal arms */}
              <line 
                x1={specialForm === 'balloon' ? "75" : "85"} 
                y1={specialForm === 'balloon' ? "130" : "120"} 
                x2={specialForm === 'balloon' ? 
                    "55" : 
                    action === 'idle' ? 
                      "65" : 
                      action === 'chasing' ? 
                        "55" : 
                        "70"
                }
                y2={specialForm === 'balloon' ? 
                    "130" : 
                    action === 'idle' ? 
                      "130" : 
                      action === 'chasing' ? 
                        "120" : 
                        "135"
                } 
                stroke={specialForm === 'gear5' ? "#FFFFFF" : "#FFE0BD"} 
                strokeWidth={specialForm === 'gear5' ? "16" : "12"} 
                strokeLinecap="round"
                className={action !== 'idle' ? 'animate-swing' : ''}
              />
              <line 
                x1={specialForm === 'balloon' ? "125" : "115"} 
                y1={specialForm === 'balloon' ? "130" : "120"} 
                x2={specialForm === 'balloon' ? 
                    "145" : 
                    action === 'idle' ? 
                      "135" : 
                      action === 'chasing' ? 
                        "145" : 
                        "130"
                }
                y2={specialForm === 'balloon' ? 
                    "130" : 
                    action === 'idle' ? 
                      "130" : 
                      action === 'chasing' ? 
                        "120" : 
                        "135"
                } 
                stroke={specialForm === 'gear5' ? "#FFFFFF" : "#FFE0BD"} 
                strokeWidth={specialForm === 'gear5' ? "16" : "12"} 
                strokeLinecap="round"
                className={action !== 'idle' ? 'animate-swing-reverse' : ''}
              />
            </>
          )}
          
          {/* Legs - change based on form */}
          {specialForm === 'balloon' ? (
            <>
              <line x1="90" y1="165" x2="90" y2="185" stroke="#1E40AF" strokeWidth="14" strokeLinecap="round" />
              <line x1="110" y1="165" x2="110" y2="185" stroke="#1E40AF" strokeWidth="14" strokeLinecap="round" />
            </>
          ) : specialForm === 'gear5' ? (
            <>
              <line x1="90" y1="150" x2="90" y2="180" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" />
              <line x1="110" y1="150" x2="110" y2="180" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" />
            </>
          ) : (
            <>
              <line x1="92" y1="149" x2="92" y2="180" stroke="#1E40AF" strokeWidth="14" strokeLinecap="round" />
              <line x1="108" y1="149" x2="108" y2="180" stroke="#1E40AF" strokeWidth="14" strokeLinecap="round" />
            </>
          )}
          
          {/* Steam effect for Gear 5 */}
          {specialForm === 'gear5' && (
            <>
              <circle cx="80" cy="60" r="6" fill="white" className="animate-steam" style={{ animationDelay: '0s' }} />
              <circle cx="120" cy="70" r="5" fill="white" className="animate-steam" style={{ animationDelay: '0.2s' }} />
              <circle cx="75" cy="100" r="7" fill="white" className="animate-steam" style={{ animationDelay: '0.5s' }} />
              <circle cx="125" cy="110" r="6" fill="white" className="animate-steam" style={{ animationDelay: '0.7s' }} />
              <circle cx="85" cy="150" r="5" fill="white" className="animate-steam" style={{ animationDelay: '1s' }} />
              <circle cx="115" cy="140" r="7" fill="white" className="animate-steam" style={{ animationDelay: '1.3s' }} />
            </>
          )}
        </svg>
      </div>
      
      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes walk {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes run-fast {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(3deg); }
          75% { transform: translateY(-8px) rotate(-3deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes swing {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(25deg); }
        }
        @keyframes swing-reverse {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-25deg); }
        }
        @keyframes steam {
          0% { opacity: 0.8; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-20px) scale(2); }
        }
        @keyframes stretch {
          0% { transform: scaleX(1); }
          50% { transform: scaleX(1.2); }
          100% { transform: scaleX(1); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-walk {
          animation: walk 0.5s ease-in-out infinite;
        }
        .animate-run-fast {
          animation: run-fast 0.3s ease-in-out infinite;
        }
        .animate-swing {
          animation: swing 0.5s ease-in-out infinite;
        }
        .animate-swing-reverse {
          animation: swing-reverse 0.5s ease-in-out infinite;
        }
        .animate-steam {
          animation: steam 2s ease-out infinite;
        }
        .animate-stretch {
          animation: stretch 0.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LuffyAnimation;