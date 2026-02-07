import React from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
    const location = useLocation();

    return (
        <div key={location.pathname} className="page-transition">
            {children}
            <style>{`
        .page-transition {
          animation: pageEnter 0.4s ease-out forwards;
        }
        
        @keyframes pageEnter {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
};

export default PageTransition;
