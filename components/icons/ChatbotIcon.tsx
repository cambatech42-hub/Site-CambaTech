import React from 'react';

export const ChatbotIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="#0D47A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="15.5" cy="9.5" r="1.5" fill="#FB8C00"/>
      <circle cx="8.5" cy="9.5" r="1.5" fill="#FB8C00"/>
      <path d="M8 14h8" stroke="#00ACC1" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};
