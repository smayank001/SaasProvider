import { useState } from "react";
import TypewriterText from "@/components/TypewriterText";
import { Button } from "@/components/ui/button";

const TypewriterDemo = () => {
  const [speed, setSpeed] = useState(50);
  const [delay, setDelay] = useState(2000);
  
  const sampleText = "Developing real-time collaboration tools for remote teams...";

  return (
    <div className="min-h-screen bg-background p-8 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Typewriter Animation Demo</h1>
          <p className="text-muted-foreground">
            Smooth typewriter typing animation with blinking cursor
          </p>
        </header>

        <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold">Live Preview</h2>
            
            <div className="bg-muted rounded-lg p-6 min-h-[100px] flex items-center justify-center">
              <p className="text-xl font-mono text-primary">
                <TypewriterText text={sampleText} speed={speed} delay={delay} />
              </p>
            </div>
            
            <p className="text-muted-foreground">
              The text above demonstrates the typewriter effect with a blinking cursor
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Customization Controls</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <label className="block">
                <span className="text-lg font-medium">Typing Speed: {speed}ms</span>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="w-full mt-2"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Adjust how fast each character appears
                </p>
              </label>
            </div>
            
            <div className="space-y-4">
              <label className="block">
                <span className="text-lg font-medium">Restart Delay: {delay}ms</span>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  value={delay}
                  onChange={(e) => setDelay(Number(e.target.value))}
                  className="w-full mt-2"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Time before the animation restarts
                </p>
              </label>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button variant="outline" onClick={() => {
              setSpeed(50);
              setDelay(2000);
            }}>
              Reset to Defaults
            </Button>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Implementation Details</h2>
          <div className="prose prose-invert max-w-none">
            <ul className="space-y-2">
              <li>Character-by-character typing animation</li>
              <li>Blinking cursor that matches the theme blue (#007BFF)</li>
              <li>Smooth easing with customizable speed</li>
              <li>Seamless looping with configurable delay</li>
              <li>Built with React hooks for optimal performance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypewriterDemo;