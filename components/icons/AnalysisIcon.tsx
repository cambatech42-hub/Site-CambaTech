import React from 'react';

export const AnalysisIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 20V10" stroke="#0D47A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 20V4" stroke="#00ACC1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 20v-4" stroke="#FB8C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
