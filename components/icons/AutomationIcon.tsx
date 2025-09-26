import React from 'react';

export const AutomationIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="3" stroke="#0D47A1" strokeWidth="2"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#FB8C00" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 15v-2a1 1 0 0 1 1-1h3" stroke="#00ACC1" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 9v2a1 1 0 0 0-1 1H8" stroke="#00ACC1" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="17" cy="11" r="1" fill="#00ACC1"/>
      <circle cx="7" cy="13" r="1" fill="#00ACC1"/>
    </svg>
  );
};
