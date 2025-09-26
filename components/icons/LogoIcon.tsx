import React from 'react';

interface LogoIconProps {
  className?: string;
  isWhite?: boolean;
}

export const LogoIcon: React.FC<LogoIconProps> = ({ className, isWhite = false }) => {
  const colors = {
    blue: isWhite ? '#FFFFFF' : '#0D47A1', // Deep Blue
    orange: isWhite ? '#E0E0E0' : '#FB8C00', // Vibrant Orange
    teal: isWhite ? '#BDBDBD' : '#00ACC1', // Bright Teal
  };

  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M85,50 C85,69.33 69.33,85 50,85 L25,85 C21.686,85 19.82,81.42 21.21,78.78 L35,53 C35,53 30,50 30,45 C30,40 35,37 35,37 L21.21,11.21 C19.82,8.57 21.68,5 25,5 L50,5 C69.33,5 85,20.67 85,40 C85,45 82,50 82,50 C82,50 85,45 85,50Z"
        fill={colors.blue}
      />
      
      <path
        d="M 40 55 C 45 45, 55 45, 60 55"
        stroke={colors.teal}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 45 65 C 50 55, 60 55, 65 65"
        stroke={colors.teal}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      
      <circle cx="70" cy="30" r="4" fill={colors.orange} />
      <line x1="68" y1="35" x2="60" y2="43" stroke={colors.orange} strokeWidth="3" strokeLinecap="round" />
      <circle cx="58" cy="45" r="3" fill={colors.orange} />
    </svg>
  );
};
