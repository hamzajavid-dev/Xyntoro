import React from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
    const location = useLocation();

    return (
        <div key={location.pathname} className="page-transition">
            {children}
            <style>{`
        .page-transition {
          animation: pageEnter 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; /* Smoother, slightly slower */
          width: 100%;
          opacity: 0; /* Start hidden for smoothness */
        }
        
        @keyframes pageEnter {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
};

export default PageTransition;
