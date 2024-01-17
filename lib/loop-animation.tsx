"use client"
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

interface LottieAnimationProps {
  animationData: any;
  className?: string;
  onClick?: () => void;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData, className, onClick }) => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current!,
      renderer: 'svg',
      loop: true, // Ensures the animation loops continuously
      autoplay: true, // Automatically start playing the animation
      animationData: animationData,
    });

    return () => anim.destroy(); // Optional clean up for unmounting
  }, [animationData]);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return <div ref={animationContainer} className={className} onClick={handleClick}/>;
};

export default LottieAnimation;