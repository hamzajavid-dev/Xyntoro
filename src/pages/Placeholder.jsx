import React from 'react';

const Placeholder = ({ title }) => {
    return (
        <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
            <h1 style={{ color: 'var(--color-navy)', fontSize: '3rem', marginBottom: '1rem' }}>{title}</h1>
            <p>This page is under construction.</p>
        </div>
    );
};

export default Placeholder;
