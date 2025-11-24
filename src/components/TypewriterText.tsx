import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
}

const TypewriterText = ({ 
  text, 
  speed = 50, 
  delay = 2000 
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Reset when text changes
    setDisplayText("");
    setCurrentIndex(0);
    setIsComplete(false);
  }, [text]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    // Typing effect
    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
    }
    // When typing is complete
    else if (currentIndex === text.length && !isComplete) {
      setIsComplete(true);
      // Restart after delay
      timeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex(0);
        setIsComplete(false);
      }, delay);
    }
    
    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed, delay, isComplete]);

  useEffect(() => {
    // Cursor blinking effect only when typing
    if (!isComplete) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      
      return () => clearInterval(cursorInterval);
    } else {
      setShowCursor(false);
    }
  }, [isComplete]);

  return (
    <span className="font-mono">
      {displayText}
      {!isComplete && (
        <span 
          className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          style={{ color: '#007BFF' }}
        >
          |
        </span>
      )}
    </span>
  );
};

export default TypewriterText;