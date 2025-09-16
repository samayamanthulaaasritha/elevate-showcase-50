import { useEffect, useState } from "react";

const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true);
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  if (isComplete) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="text-center relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 animate-pulse-glow">
            <span className="text-2xl font-bold text-white">P</span>
          </div>
          <h1 className="text-2xl font-display font-bold gradient-text">Premium Portfolio</h1>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="h-1 bg-muted/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-primary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Progress Text */}
        <div className="text-muted-foreground text-sm">
          Loading amazing projects... {progress}%
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center mt-4 space-x-1">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;